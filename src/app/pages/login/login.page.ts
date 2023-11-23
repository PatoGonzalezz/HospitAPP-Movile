import { Component, OnInit, inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  /**
   * Se genera el modelo user con dos claves
   * cada clave tiene su valor inicial
   */
  user={
     usuario:"",
     password:""
   }
   // variable para mostrar el campo faltante
   field:string="";
   constructor(private router: Router, public toastController: ToastController) { }

   firebaseSvc = inject(FirebaseService);

   ngOnInit() {
   }

   submit(){
    if (this.form.valid){
      this.firebaseSvc.signIn(this.form.value as User).then(res => {
        console.log(res)
      })
    }
   }

   ingresar(){
     localStorage.setItem('ingresado','true');
     console.log(this.user)
     if (this.validateModel(this.user)) {
       this.presentToast("top", "Bienvenido "+this.user.usuario);
      // Se declara e instancia un elemento de tipo NavigationExtras
       let navigationextras: NavigationExtras={
         state:{
           user: this.user //Al state le asigno un objeto con clave valor
         }
       }
       this.router.navigate(['/home'],navigationextras);
     }else{
       this.presentToast("bottom","Falta "+this.field,4000);
     }
    
   }
    
   /**
    * validateModel sirve para validar que se ingrese algo en los
    * campos del html mediante su modelo
    */
   validateModel(model:any){
     // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
     for(var[key,value] of Object.entries(model)){
       // Si un valor es "" se retornara false y se avisara de lo faltante
       if(value==""){
         this.field=key;
         return false;
       }      
     }
     return true;
   }

     /**
    * Muestra un toast al usuario
    * @param position Posición dónde se mostrará el mensaje
    * @param message Mensaje a presentar al usuario
    * @param duration Duración el toast, este es opcional
    */
  async presentToast(position: 'top' | 'middle' | 'bottom',
                    message: string,
                    duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration?duration:2000,
      position: position,
    });
    await toast.present();
  }
}

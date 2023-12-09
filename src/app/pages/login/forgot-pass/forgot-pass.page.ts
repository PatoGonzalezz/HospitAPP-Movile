import { Component, OnInit, inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  constructor() { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService)

  ngOnInit() {
  }

  async submit(){
    if (this.form.valid){
      const loading = await this.utilSvc.loading();
      await loading.present();
      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(res => {
        
        this.utilSvc.presentToast({
          message: 'Correo enviado con exito',
          duration: 1500,
          color: 'primary',
          position: 'middle',
          icon: 'mail-outline'
        });

        this.utilSvc.routerLink('/home');
        this.form.reset();

      }).catch(error=> {
        console.log(error);
        this.utilSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).finally(() => {
        loading.dismiss();
      })
    }
   }

}

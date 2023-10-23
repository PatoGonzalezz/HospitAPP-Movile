import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    /**
   * En el constructor del HomePage se colocan por parametros
   * todas aquellas propiedades con el siguiente formato
   * private = visibilidad
   * activeRoute = identificador
   * ActiveRoute = Tipo de Objeto
   * : Indica que el identificador sera de la clase posterior 
   * a los : puntos
   * 
   */
  darkmode=false;
  data:any;
  niveles:any[]=[
    {id:1, nivel:"Basica Incompleta"},
    {id:2, nivel:"Basica Completa"},
    {id:3, nivel:"Media Incompleta"},
    {id:4, nivel:"Media Completa"},
    {id:5, nivel:"Superior Incompleta"},
    {id:6, nivel:"Superior Completa"}    
  ]

  datos:any={
    nombre:"",
    apellido:"",
    educacion:"",
    nacimiento:""
  };
  constructor(private router: Router) {
    // Se llama a la ruta activa y se obtiene sus parametros mediante una suscripción
        this.router.navigate(['home/inicio']);
    };
  
  ngOnInit(){
    // this.check_app_mode();
  }

  ionViewCanEnter(): boolean {
    // Verificar 
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    if (!isAuthenticated) {
      this.router.navigate(['/login']); 
      return false;
    }

    // Continuar mostrando la página si el usuario está autenticado
    return true;
  }

  limpiar(){
    for(var[key,value] of Object.entries(this.datos)){
      Object.defineProperty(this.datos,key,{value:""});
    }
  }
  // mostrar(){}

  // check_app_mode(){
  //   const esDarkMode =  localStorage.getItem('darkmodeActivated');
  //   esDarkMode == 'true'
  //     ? (this.darkmode = true)
  //     : (this.darkmode = false) 
  //     document.body.classList.toggle('dark', this.darkmode)
  //   }

  // toggleDarkMode(){
  //   this.darkmode = !this.darkmode;
  //   document.body.classList.toggle('dark',this.darkmode);
  //   if (this.darkmode){
  //     localStorage.setItem( 'darkModeActived', 'true');
  //   }else{
  //     localStorage.setItem('darkModeActivated','false');
  //   }
  // }
  logout(){
    localStorage.removeItem('ingresado');
  }
  segmentChanged($event: any){
    console.log("Hola")
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['/home/'+direccion]);
  }
}

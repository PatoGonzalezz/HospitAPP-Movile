import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {
  darkmode=true;
  data: any;
  utilSvc = inject(UtilsService)

  constructor(private activateRoute: ActivatedRoute, private router: Router) { 
    this.activateRoute.queryParams.subscribe(params =>{//utilizo lambda
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.["user"];
        console.log(this.data)
      }else{
        this.router.navigate(['home/']);
      }
    });
  }

  ngOnInit() {
      this.check_app_mode();
  }



  logout(){
    localStorage.removeItem('ingresado');
    this.utilSvc.routerLink('/login');
  }

  perfil(){
    this.utilSvc.routerLink('/perfil')
  }

  config(){
    this.utilSvc.routerLink('/config')
  }

  historial(){
    this.utilSvc.routerLink('/historial')
  }

  notfound(){
    this.utilSvc.routerLink('/notfound')
  }

  check_app_mode(){
    const esDarkMode =  localStorage.getItem('darkmodeActivated');
    esDarkMode == 'true'
      ? (this.darkmode = true)
      : (this.darkmode = false) 
      document.body.classList.toggle('dark', this.darkmode)
    }

  toggleDarkMode(){
    this.darkmode = !this.darkmode;
    document.body.classList.toggle('dark',this.darkmode);
    if (this.darkmode){
      localStorage.setItem( 'darkModeActived', 'true');
    }else{
      localStorage.setItem('darkModeActivated','false');
    }
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
}

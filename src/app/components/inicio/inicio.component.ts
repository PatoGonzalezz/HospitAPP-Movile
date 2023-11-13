import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {
  darkmode=true;
  data: any;

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

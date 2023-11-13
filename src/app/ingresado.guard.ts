import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {
  navCTRL = Inject(NavController)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('ingresado')){
      return true
    }else{
      this.navCTRL.navigateRoot('login');
      return false
    }
  }
  
}


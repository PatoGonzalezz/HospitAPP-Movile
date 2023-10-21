import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoIngresadoGuard implements CanActivate {
  navCTRL=inject(NavController)

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('ingresado')){
      this.navCTRL.navigateRoot('home')
      return false
    }else{
      return true;
    }
  }
}

//export class NoIngresadoGuard implements CanDeactivate<unknown> {
//  canDeactivate(
//    component: unknown,
//    currentRoute: ActivatedRouteSnapshot,
//    currentState: RouterStateSnapshot,
//    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//    return true;
//  }
//  
//}

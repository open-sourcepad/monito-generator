import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{
  storedUser:any;
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot){
    this.storedUser = JSON.parse(localStorage.getItem('mg_current_user'));
    if (route.url[0].path == 'login' || route.url[0].path == 'register'){
      if (this.storedUser){
        this.router.navigate([`/dashboard/${this.storedUser['user_name']}`]);
        return false
      }
      else{
        return true
      }
    }
    else{
      return true
    }
  }
}

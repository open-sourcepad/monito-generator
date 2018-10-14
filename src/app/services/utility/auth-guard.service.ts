import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  storedUser: any;
  visitValid: any;
  constructor(private auth: AuthService,
              private http: Http,
              private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // console.log(route.params) {user: "sample_name}
    // console.log(state) '/dashboard/test'
    // var visitValid = this.auth.validateRouteVisit(route.params['user'])
    this.storedUser = JSON.parse(localStorage.getItem('mg_current_user'));

    if(this.storedUser){
      if(this.storedUser['user_name'] == route.params['user']){
        return true
      }
      else{
        this.router.navigate(['/login']);
        return false
      }
    }
    else{
      this.router.navigate(['/login']);
      return false
    }
  }
}

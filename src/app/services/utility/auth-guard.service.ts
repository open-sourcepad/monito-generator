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
    if(this.storedUser['user_name'] == route.params['user']){
      this.visitValid = true;
    }
    if (!this.visitValid){
      this.router.navigate(['/login']);
      return false
    }
    return true
  }
}

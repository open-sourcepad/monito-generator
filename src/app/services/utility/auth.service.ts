import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getCurrentUser(){
    return of(localStorage.getItem('mg_current_user'));
  }
  constructor() { }
}

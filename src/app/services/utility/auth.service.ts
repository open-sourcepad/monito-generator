import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Http, Response} from '@angular/http';
import { HttpService } from '../api/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storedUser:string;
  out: any;
 /* @Output() getCurrentUser = new EventEmitter();
  fetchCurrentUser(){
    this.storedUser = JSON.parse(localStorage.getItem('mg_current_user'));
    this.getCurrentUser.emit(this.storedUser);
  }*/

  getUser(){
    this.storedUser = JSON.parse(localStorage.getItem('mg_current_user'));
    return this.storedUser;
  };
  constructor(private http: Http, private httpService: HttpService) { }
}

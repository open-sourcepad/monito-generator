import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  add_user(user){
    var newUserPath = environment.api_url + "/api/users";
    // debugger;
    // console.log();
    return this.http.post(newUserPath, user);
  }

  login_user(user){
    var newUserPath = environment.api_url + "/api/sessions";

    return this.http.post(newUserPath, user);
  }

  constructor(private http:Http) { }
}

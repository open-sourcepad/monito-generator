import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedUser = new BehaviorSubject<string>(null);
  data = this.loggedUser.asObservable();

  public setLoggedUser(user){
    this.loggedUser.next(user);
  };

  public getLoggedUser(){
    return this.loggedUser;
  }
  constructor() { }
}

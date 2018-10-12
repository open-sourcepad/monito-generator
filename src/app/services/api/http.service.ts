import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: Http) { }

  postToRoute(path, object, headers){
    path = environment.api_url + path;
    return this.http.post(path, object, headers);
  };
}

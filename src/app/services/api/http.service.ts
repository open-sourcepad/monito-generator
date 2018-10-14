import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  postToRoute(path, object, headers){
    path = environment.api_url + path;
    headers = {}
    return this.httpClient.post(path, object, headers);
  };
  getToRoute(path, params){
    path = environment.api_url + path;
    return this.httpClient.get(path, params);
  }
}

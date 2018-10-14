import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { HttpService } from '../../services/api/http.service';
import { AuthService } from '../../services/utility/auth.service';
import { Headers,RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcircle',
  templateUrl: './addcircle.component.pug',
  styleUrls: ['./addcircle.component.css']
})
export class AddcircleComponent implements OnInit {
  circleForm: any;
  storedUser: any;
  requestHolder: any;
  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private httpService: HttpService,
              private authService: AuthService,
              private router: Router
  ) {
    this.circleForm = this.formBuilder.group({
      'circle_name': ['', Validators.required],
      'budget': ['', Validators.required],
      'exchange_date': ['', Validators.required]
    });

  }

  goBack(){
    this.location.back();
  }
  addCircle(form_params){
    this.storedUser = this.authService.getUser();
    this.requestHolder = {'circle_name':form_params['circle_name'], 'budget': form_params['budget'], 'exchange_date':form_params['exchange_date'], 'user_name': this.storedUser['user_name'], 'auth_hash': this.storedUser['auth_hash'] };
    this.httpService.postToRoute('/api/circles', this.requestHolder, null).subscribe(
      response =>{
        if(response['error']){
          console.log(response);
          this.router.navigate([`/dashboard/${this.storedUser['user_name']}`]);
        }
        else{
          console.log(response);
          this.router.navigate([`/dashboard/${this.storedUser['user_name']}`]);
        }
    }
    )
  }
  ngOnInit() {
  }

}

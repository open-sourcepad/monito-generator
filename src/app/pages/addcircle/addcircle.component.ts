import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { HttpService } from '../../services/api/http.service';
import { AuthService } from '../../services/utility/auth.service';
import { Headers,RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { ValidationService } from '../../control-messages/validation.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-addcircle',
  templateUrl: './addcircle.component.pug',
  styleUrls: ['./addcircle.component.css']
})
export class AddcircleComponent implements OnInit {
  circleForm: any;
  storedUser: any;
  requestHolder: any;
  date = new Date();
  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private httpService: HttpService,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService
  ) {
    this.circleForm = this.formBuilder.group({
      'circle_name': ['', Validators.required],
      'budget': ['', Validators.required],
      'exchange_date': ['', [Validators.required, ValidationService.dateValidator]],
      'code_name': ['', Validators.required],
      userEvents: this.formBuilder.array([]),
      wishes: this.formBuilder.array([])
    });

  }

  addUserEvent(){
    var userEventsArr = <FormArray>this.circleForm.controls.userEvents;
    userEventsArr.push(
      this.formBuilder.group({
        'userEvent': ['',[Validators.required]],
        'exchange_date': ['', [Validators.required, ValidationService.dateValidator]]
      })
    )
  }

  removeUserEvent(i){
    var userEventsArr = <FormArray>this.circleForm.controls.userEvents;
    userEventsArr.removeAt(i);
  }

  addWish(){
    var wishesArr = <FormArray>this.circleForm.controls.wishes;
    wishesArr.push(
      this.formBuilder.group({
        'wish': ['', [Validators.required]]
      })
    )
  }

  removeWish(i){
    var wishesArr = <FormArray>this.circleForm.controls.wishes;
    wishesArr.removeAt(i);
  }

  goBack(){
    this.location.back();
  }

  addCircle(form_params){
    this.storedUser = this.authService.getUser();
    this.requestHolder = {'circle_name':form_params['circle_name'],
                           'budget': form_params['budget'],
                           'exchange_date':form_params['exchange_date'],
                           'user_name': this.storedUser['user_name'],
                           'auth_hash': this.storedUser['auth_hash'],
                           'code_name': form_params['code_name'],
                           'wish_list': form_params['wishes'],
                           'user_events': form_params['userEvents']
    };
    this.httpService.postToRoute('/api/circles', this.requestHolder, null).subscribe(
      response =>{
        if(response['error']){
          console.log(response);
          this.toastr.success(`There was an error in your action.`)
          this.router.navigate([`/dashboard/${this.storedUser['user_name']}`]);
        }
        else{
          console.log(response);
          this.router.navigate([`/dashboard/${this.storedUser['user_name']}`]);
          this.toastr.success(`Successfully Added Circle: ${form_params['circle_name']}!`)
        }
    }
    )
  }
  ngOnInit() {
    this.addWish();
    this.addWish();
    this.addWish();
  }

}

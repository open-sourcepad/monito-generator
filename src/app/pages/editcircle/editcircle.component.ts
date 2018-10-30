import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { HttpService } from '../../services/api/http.service';
import { AuthService } from '../../services/utility/auth.service';
import { Headers,RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from '../../control-messages/validation.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-editcircle',
  templateUrl: './editcircle.component.pug',
  styleUrls: ['./editcircle.component.css']
})
export class EditcircleComponent implements OnInit {
  circleForm: any;
  storedUser: any;
  requestHolder: any;
  date = new Date();

  currentCircle: any;
  userCircles: any;
  userEvents: any;

  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private httpService: HttpService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
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
  setCircleFields(){
    var snapshot = this.route.snapshot;
    this.httpService.getToRoute(`/api/circles/${snapshot.params['circle']}/edit/`, snapshot.params).subscribe(
    response=>{
      this.circleForm.controls['circle_name'].setValue(response['circle']['circle_name']);
      this.circleForm.controls['budget'].setValue(response['circle']['budget']);
      this.circleForm.controls['exchange_date'].setValue(response['circle']['exchange_date']);
      this.circleForm.controls['code_name'].setValue(response['owner_user_circle']['code_name']);
      
      let userEventsArr = <FormArray>this.circleForm.controls.userEvents;
      let userEvents = response['user_events']
      for(var i = 0; i< userEvents.length; i++){
        if (userEvents[i]['desc'] == null){ continue }
        userEventsArr.push(
          this.formBuilder.group({
            'userEvent': [ userEvents[i]['desc'],[Validators.required]],
            'exchange_date': [ userEvents[i]['exchange_date'], [Validators.required, ValidationService.dateValidator]]
          })
        )

      }

      let wishesArr = <FormArray>this.circleForm.controls.wishes;
      let wishList = JSON.parse(response['owner_user_circle']['wishlist']);
      for(var i = 0;i< wishList.length;i++){
        wishesArr.push(
          this.formBuilder.group({
            'wish': [wishList[i], [Validators.required]]
          })
        )
      }
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

  updateCircle(form_params){
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
    var snapshot = this.route.snapshot;
    this.httpService.patchToRoute(`/api/circles/${snapshot.params['circle']}`, this.requestHolder).subscribe(
      response =>{
        if(response['error']){
          console.log(response);
          this.toastr.success(`There was an error in your action.`)
          this.router.navigate([`/dashboard/${this.storedUser['user_name']}`]);
        }
        else{
          console.log(response);
          this.router.navigate([`/dashboard/${this.storedUser['user_name']}`]);
          this.toastr.success(`Successfully Updated Circle: ${form_params['circle_name']}!`)
        }
    }
    )
  }
  ngOnInit() {
    this.setCircleFields();
  }

}

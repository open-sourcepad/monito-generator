import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidationService } from '../../control-messages/validation.service';
import { UserService } from '../../services/api/user.service';
import { HttpService } from '../../services/api/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  rendErrors: any;
  rendUser: any;

  userForm: any;
  regForm: any;
  invitedBy: any;
  userExist: any;
  groupExist: any;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private httpService: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService
  ){
    // if the user exists
    this.userExist = this.route.snapshot.params['user_name'];
    // if user has been invited to a circle
    this.invitedBy = this.route.snapshot.params['circle_id'];

    if(this.userExist){
       this.regForm = {
         'code_name': ['', Validators.required],
         wishes: this.formBuilder.array([])
       }
    }
    // if the user does not exist
    else{
       // fresh register
       this.regForm = {
         'user_name':['', Validators.required],
         'email':['', [Validators.required, ValidationService.emailValidator]],
         'password':['', [Validators.required, Validators.minLength(6)]],
         'password_confirmation':['', Validators.required]
       }
       // if the user has been invited
       if(this.invitedBy){
         this.regForm['code_name'] = ['', Validators.required];
         this.regForm['wishes'] = this.formBuilder.array([]);
       }

    }
    this.userForm = this.formBuilder.group(this.regForm);

  }

  addWish(){
    var wishesArr = <FormArray>this.regForm.wishes;
    wishesArr.push(
      this.formBuilder.group({
        'wish': ['', [Validators.required]]
      })
    )
  }

  removeWish(i){
    var wishesArr = <FormArray>this.regForm.wishes;
    wishesArr.removeAt(i);
  }

  onSubmit(form_params): any {
    form_params['invited_by'] = this.invitedBy;
    if(!form_params['user_name']){
      form_params['user_name'] = this.userExist;
      form_params['user_exists'] = true;
    }
    this.httpService.postToRoute('/api/users',form_params, null).subscribe(
      response => {
        if ('user_name' in response){
          this.rendUser = response;

          if ('circle_invitation' in response){
            this.toastr.success(`Succesfully Added You to: ${response['circle_invitation']}`);
          }
          else{
            this.toastr.success('Registration Successful!');
          }
          localStorage.setItem('mg_current_user', JSON.stringify(this.rendUser))
          this.router.navigate(['/dashboard/' + this.rendUser['user_name']])
        }
        else{
          this.rendErrors = response;
        }
      }
    );
   }

  ngOnInit() {
    this.groupExist = this.route.snapshot.params['circle_id'];
    // check if valid
    if(this.invitedBy){
      this.addWish();
      this.addWish();
      this.addWish();
    }

  }

}

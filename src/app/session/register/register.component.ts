import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../control-messages/validation.service';
import { UserService } from '../../services/api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  rendErrors: any;
  rendUser: any;

  userForm: any;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router){
    this.userForm = this.formBuilder.group({
      'user_name':['', Validators.required],
      'email':['', [Validators.required, ValidationService.emailValidator]],
      'password':['', [Validators.required, Validators.minLength(6)]],
      'password_confirmation':['', Validators.required],
      }
    )
  }

  onSubmit(form_params): any {
    this.userService.add_user(form_params).subscribe(
      response => {
        response = response.json();

        if ('user_name' in response){
          this.rendUser = response;

          console.log('Registration Success!');
          console.log(this.rendUser);

          // activate dashboard link
          this.router.navigate(['/dashboard/' + this.rendUser['user_name']])
          // put login cookie in the browser
        }
        else{
          this.rendErrors = response;
          console.log("Registration Failed!");
          console.log(response);
        }

        //debugger;
        //console.log();
      }
    );
   }

  ngOnInit() {
  }

}

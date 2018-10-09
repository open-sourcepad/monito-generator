import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../control-messages/validation.service';
import { UserService } from '../../services/api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rendUser: any;
  rendErrors: any;
  userForm :any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.formBuilder.group({
      'email':['', [Validators.required, ValidationService.emailValidator]],
      'password':['', Validators.required]
      }
    )
  }

  onSubmit(form_params): any {
    this.userService.login_user(form_params).subscribe(
      response => {
        response = response.json();
        if ('user_name' in response){
          this.rendUser = response;

          console.log('Registration Success!');
          console.log(this.rendUser);
          localStorage.setItem('mg_current_user', JSON.stringify(this.rendUser))
          // activate dashboard link
          this.router.navigate(['/dashboard/' + this.rendUser['user_name']])
          // put login cookie in the browser
        }
        else{
          this.rendErrors = response;
          console.log("Login Failed!");
          console.log(response);
        }

      }
    );
  }

  ngOnInit() {
  }

  saySomething(event) {
    console.log(event);
  }

}

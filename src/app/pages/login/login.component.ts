import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../control-messages/validation.service';
import { UserService } from '../../services/api/user.service';
import { HttpService } from '../../services/api/http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rendUser: any;
  rendErrors: any;
  userForm :any;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private httpService: HttpService,
              private toastr: ToastrService
  ) {
    this.userForm = this.formBuilder.group({
      'email':['', [Validators.required, ValidationService.emailValidator]],
      'password':['', Validators.required]
      }
    )
  }

  onSubmit(form_params): any {
    this.httpService.postToRoute('/api/sessions',form_params, null).subscribe(
      response => {
        if ('user_name' in response){
          this.rendUser = response;

          console.log('Registration Success!');
          console.log(this.rendUser);
          localStorage.setItem('mg_current_user', JSON.stringify(this.rendUser))
          this.router.navigate(['/dashboard/' + this.rendUser['user_name']])
          this.toastr.success(`Login Successful: ${this.rendUser['user_name']}`)
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

}

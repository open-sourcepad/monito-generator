import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../control-messages/validation.service';
import { UserService } from '../../services/api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm :any;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      'email':['', [Validators.required, ValidationService.emailValidator]],
      'password':['', Validators.required]
      }
    )
  }

  onSubmit(form_params): any {
    // this.userS
  }

  ngOnInit() {
  }

}

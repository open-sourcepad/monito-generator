import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'user_name':[''],
      'email':[''],
      'password':[''],
      'password_confirmation':[''],
      }
    )
  }

  onSubmit(form_params): any {
    debugger;
    console.log();
  }

  ngOnInit() {
  }

}

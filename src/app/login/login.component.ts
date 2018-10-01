import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm :any;

  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      'email':[''],
      'password':['']
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

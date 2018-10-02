import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../control-messages/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'user_name':['', Validators.required],
      'email':['', [Validators.required, ValidationService.emailValidator]],
      'password':['', [Validators.required, Validators.minLength(6)]],
      'password_confirmation':['', Validators.required],
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

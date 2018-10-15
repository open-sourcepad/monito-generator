import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ControlMessagesComponent } from '../../../control-messages/control-messages.component'
import { ValidationService } from '../../../control-messages/validation.service'


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.pug',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  usersForm:any;
  constructor(private formBuilder: FormBuilder) {
    this.usersForm = this.formBuilder.group({
      users: this.formBuilder.array([])
    });
  }

  addUser(){
    var usersArr = <FormArray>this.usersForm.controls.users;
    usersArr.push(
      this.formBuilder.group({
        'user_name':['',Validators.required],
        'email':['',[Validators.required, ValidationService.emailValidator]],
      })
    )
    console.log("Add User");
  };
  removeUser(i){
    console.log(i);
    console.log("Remove User");
    var usersArr = <FormArray>this.usersForm.controls.users;
    usersArr.removeAt(i);
  };
  onSubmit(formParams){
    debugger;
    console.log(formParams);
  }
  ngOnInit() {
    this.addUser();
    console.log(this.usersForm);
    console.log(this.usersForm.get('users').controls.length);
  }

}

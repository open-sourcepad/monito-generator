import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ControlMessagesComponent } from '../../../control-messages/control-messages.component'
import { ValidationService } from '../../../control-messages/validation.service'
import { HttpService } from '../../../services/api/http.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.pug',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  @Input() currentCircle;

  usersForm:any;
  constructor(private formBuilder: FormBuilder,
              private httpService: HttpService) {
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
    console.log(this.currentCircle);
    var path = `/api/circles/${this.currentCircle['id']}/send_emails`;
    this.httpService.postToRoute(path, {'currenct_circle': this.currentCircle, 'invitations': formParams  },{}).subscribe( response => {
      console.log(response);

    });
  }
  ngOnInit() {
    this.addUser();
    console.log(this.usersForm);
    console.log(this.usersForm.get('users').controls.length);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ControlMessagesComponent } from '../../../control-messages/control-messages.component'
import { ValidationService } from '../../../control-messages/validation.service'
import { HttpService } from '../../../services/api/http.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../../services/utility/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.pug',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  @Input() currentCircle;

  usersForm: any;
  storedUser: any;
  constructor(private formBuilder: FormBuilder,
              private httpService: HttpService,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService
  ) {
    this.usersForm = this.formBuilder.group({
      users: this.formBuilder.array([])
    });
  }

  addUser(){
    var usersArr = <FormArray>this.usersForm.controls.users;
    usersArr.push(
      this.formBuilder.group({
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
    var path = `/api/circles/${this.currentCircle['id']}/send_emails`;
    this.httpService.postToRoute(path, {'current_circle': this.currentCircle, 'invitations': formParams  },{}).subscribe( response => {
      if(response['existing_emails'].length >= 1){
        var existing_emails = response['existing_emails']
        var inviteWarn = 'Some Invited Email(s) are Already in the Circle:'
        for(var i=0;i<existing_emails.length;i++){
          inviteWarn += '\n' + existing_emails[i]
        }
        this.toastr.warning(inviteWarn)
      }
      else{
        this.toastr.success(`Invitation(s) Sent!`);
      }

    });
    this.router.navigate([`/dashboard/${this.storedUser['user_name']}`]);
  }
  ngOnInit() {
    this.storedUser = this.authService.getUser();
    this.addUser();
  }

}

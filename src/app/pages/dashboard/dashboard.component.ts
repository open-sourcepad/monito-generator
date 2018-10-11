import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.pug',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    //this.userService.setLoggedUser(123);
  }

}

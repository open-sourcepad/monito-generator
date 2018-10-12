import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api/user.service';
import { AuthService } from '../../services/utility/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.pug',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser;
  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router
  ) { }

  goToAddCircle(){
    this.currentUser = this.authService.getUser();
    this.router.navigate([`addcircle/${this.currentUser}`]);
  }
  ngOnInit() {
    //this.userService.setLoggedUser(123);
  }

}

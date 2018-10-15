import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/api/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.pug',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() currentUser;
  userHolder;
  constructor(private userService: UserService,
              private router: Router
  ) { }

  logoutUser(){
    localStorage.removeItem('mg_current_user');
    this.userHolder = null;
    this.router.navigate(['/login'])
  };

  ngOnInit() {
    this.userService.data.subscribe(response=>{
      this.userHolder = response;
      console.log(this.userHolder);
    })
  }

}

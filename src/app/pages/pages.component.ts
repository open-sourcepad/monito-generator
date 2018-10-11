import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/utility/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.pug',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  currentUser: any;
  constructor(private router: Router, private authService: AuthService) {
    /*this.authService.fetchCurrentUser().subscribe(user_name => {
      this.currentUser = user_name;
    });*/
  }

  ngOnInit() {
  }

}

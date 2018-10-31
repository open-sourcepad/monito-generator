import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api/user.service'; import { AuthService } from '../../services/utility/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../services/api/http.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.pug',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: any = this.authService.getUser();
  allCircles: any = [];
  page = 1;
  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private httpService: HttpService,
              private toastr: ToastrService
  ) { }

  goToAddCircle(){
    this.router.navigate([`addcircle/${this.currentUser['user_name']}`]);
  }
  getCircles(){
    let params = new HttpParams();
    params = params.append('user_name', this.currentUser['user_name']);
    params = params.append('page', String(this.page));
    this.page++;
    this.httpService.getToRoute(`/api/circles/`, {params: params}).subscribe( response=>{
      this.allCircles = this.allCircles.concat(response['circles']);
    });
  }
  onScroll(){
    this.getCircles();
  }
  ngOnInit() {
    this.getCircles();
    this.userService.setLoggedUser(this.currentUser);
  }

}

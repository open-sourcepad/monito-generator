import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api/user.service';
import { AuthService } from '../../services/utility/auth.service';
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
  allCircles: any;
  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private httpService: HttpService,
              private toastr: ToastrService
  ) { }

  goToAddCircle(){
    this.router.navigate([`addcircle/${this.currentUser['user_name']}`]);
  }

  goToShowCircle(circleId){
    debugger;
    console.log();
  }
  getCircles(){
    let params = new HttpParams();
    params = params.append('user_name', this.currentUser['user_name']);
    this.httpService.getToRoute(`/api/circles/`, {params: params}).subscribe( response=>{
      this.allCircles = response['circles'];
    });
  }
  deleteCircle(circle_name){
    this.toastr.success(`Successfully Deleted Circle: ${circle_name}!`)
  }
  ngOnInit() {
    this.getCircles();
    this.userService.setLoggedUser(this.currentUser);
  }

}

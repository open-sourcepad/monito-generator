import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/utility/auth.service';
import { HttpService } from '../../../services/api/http.service';
import { HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.pug',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  userEvents: any;
  currentUser: any;
  constructor(private authService: AuthService,
              private httpService: HttpService
  ) { }

  getUserEvents(user_name){
    let params = new HttpParams();
    params = params.append('current_user', user_name)
    this.httpService.getToRoute('/api/user_events/', {params: params}).subscribe(response => {
      this.userEvents = response['user_events'];
    })
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.getUserEvents(this.currentUser['user_name'])
  }

}

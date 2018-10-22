import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/api/http.service';
import { Location } from '@angular/common';
import { AuthService } from '../../services/utility/auth.service';
@Component({
  selector: 'app-showcircle',
  templateUrl: './showcircle.component.pug',
  styleUrls: ['./showcircle.component.css']
})
export class ShowcircleComponent implements OnInit {
  params;
  currentCircle: any;
  currentUser:any;
  acceptedEmails: any;
  codenameList: any;
  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private location: Location,
              private authService: AuthService,
              private router: Router
  ) { }
  goBack(){
    this.location.back();
  }

  getDetails(){
    //this.httpService.getToRoute('api/circles/:jk');
    var snapshot = this.route.snapshot;
    this.params = snapshot.params;
    this.httpService.getToRoute(`/api/circles/${this.params['circle']}`, {}).subscribe(response =>{
      this.currentCircle = response['circle_found'];
      this.acceptedEmails = response['accepted_emails'];
      this.codenameList = response['codename_arr'];
    });
  };

  generateMonito(){
    var circle_id = this.currentCircle['id'];
    var path = `/api/circles/${circle_id}/generate_monito`;
    console.log(path);
    this.httpService.postToRoute(path, {'circle_id': circle_id}, {}).subscribe(response => {
      this.codenameList = response['codename_arr'];
      this.router.navigate([`/dashboard/${this.currentUser['user_name']}`]);
    });
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.getDetails();
  }

}

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
  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private location: Location,
              private authService: AuthService
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
    });
  };
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.getDetails();
  }

}

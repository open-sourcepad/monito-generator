import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/api/http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-showcircle',
  templateUrl: './showcircle.component.pug',
  styleUrls: ['./showcircle.component.css']
})
export class ShowcircleComponent implements OnInit {
  params;
  currentCircle;
  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private location: Location
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
      console.log(this.currentCircle['circle_found']);
    });
  };
  ngOnInit() {
    this.getDetails();
  }

}

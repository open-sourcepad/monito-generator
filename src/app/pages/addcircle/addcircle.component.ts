import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-addcircle',
  templateUrl: './addcircle.component.pug',
  styleUrls: ['./addcircle.component.css']
})
export class AddcircleComponent implements OnInit {
  circleForm: any;
  constructor(private formBuilder: FormBuilder) { 
    this.circleForm = this.formBuilder.group({
      'circle_name': ['', Validators.required],
      'budget': ['', Validators.required],
      'exchange_date': ['', Validators.required]
    });

  }

  addCircle(form_params){
    debugger;
  }
  ngOnInit() {
  }

}

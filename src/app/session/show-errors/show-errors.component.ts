import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.pug',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {

  @Input() errorResponse;
  debugger
  constructor() { }

  ngOnInit() {
  }

}

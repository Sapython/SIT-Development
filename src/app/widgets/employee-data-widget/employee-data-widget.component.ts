import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-data-widget',
  templateUrl: './employee-data-widget.component.html',
  styleUrls: ['./employee-data-widget.component.scss'],
})
export class EmployeeDataWidgetComponent implements OnInit {
  @Input() name:string = 'Vishwanathan Sharma';
  @Input() phoneNumber:string = '+91-9888888888';
  constructor() { }

  ngOnInit() {}

}

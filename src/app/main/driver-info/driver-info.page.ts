import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.page.html',
  styleUrls: ['./driver-info.page.scss'],
})
export class DriverInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() Name: string = "Ramlochan Vishwakarma";
  @Input() Code: string = "123XYZ0";
  @Input() Phone: string = "9876543210";
  @Input() workingin:string = "TIRUPATI SIT";
}

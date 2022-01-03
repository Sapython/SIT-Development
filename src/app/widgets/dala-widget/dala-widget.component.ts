import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dala-widget',
  templateUrl: './dala-widget.component.html',
  styleUrls: ['./dala-widget.component.scss'],
})
export class DalaWidgetComponent implements OnInit {
  @Input() driverName:string;
  @Input() driverImage:string;
  @Input() driverId:string;
  @Input() charge:number;
  @Input() ledgerNo:string;
  @Input() coordinator:string;
  @Input() driverNumber:string;
  constructor() { }

  ngOnInit() {}

}

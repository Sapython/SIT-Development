import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-unloaded-log',
  templateUrl: './unloaded-log.component.html',
  styleUrls: ['./unloaded-log.component.scss'],
})
export class UnloadedLogComponent implements OnInit {

  constructor() { }
  @Input() bakery: string = "TIRUPATI BAKERS";
  @Input() suppplyname: string = "Biscuit";
  @Input() suppplycode: string = "123XYZ0";
  @Input() coordinator: string = "Ramlal Vishwakarma";
  @Input() coordinatorphone: string = "9876543210";
  @Input() dispatchDate: string = "12/12/2019";
  @Input() expectedDelivery: string = "12/12/2019";
  @Input() productcode: string = "123XYZ0";
  @Input() productname: string = "Biscuit";
  @Input() Deliverycode: string = "123XYZ0";
  @Input() Gatenumber: number = 232426;
  @Input() Recievedata: string = "abcdefg";
  @Input() submitby: string = "Ramlal Vishwakarma";
  ngOnInit() {}

}

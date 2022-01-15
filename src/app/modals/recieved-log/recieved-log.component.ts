import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-recieved-log',
  templateUrl: './recieved-log.component.html',
  styleUrls: ['./recieved-log.component.scss'],
})
export class RecievedLogComponent implements OnInit {

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
  ngOnInit() {}

}

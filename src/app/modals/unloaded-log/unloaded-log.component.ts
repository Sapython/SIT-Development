import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-unloaded-log',
  templateUrl: './unloaded-log.component.html',
  styleUrls: ['./unloaded-log.component.scss'],
})
export class UnloadedLogComponent implements OnInit {

  constructor() { }
  @Input() name: string = "TIRUPATI BAKERS";
  @Input() productName: string = "Biscuit";
  @Input() productCode: string = "123XYZ0";
  @Input() coordinator: string = "Ramlal Vishwakarma";
  @Input() coordinatorPhone: string = "9876543210";
  @Input() dispatchDate: string = "12/12/2019";
  @Input() expectedDelivery: string = "12/12/2019";
  @Input() Deliverycode: string = "123XYZ0";
  ngOnInit() {}

}

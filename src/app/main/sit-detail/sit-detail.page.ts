import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sit-detail',
  templateUrl: './sit-detail.page.html',
  styleUrls: ['./sit-detail.page.scss'],
})
export class SITDetailPage implements OnInit {
  @Input() Deliverydate:string = "25-12-2021";
  @Input() Dispatchdate:string = "29-12-2021";
  @Input() Transportname:string = "Tata transports";
  @Input() Quantity:string = "20Kg";
  @Input() VechileNo:string = "UP70AJ1234";
  @Input() Productcode:string = "ABC123E";
  @Input() supplierplantname:string = "Vechile plant";
  @Input() supplierplantcode:string = "ABC123E";
  constructor() { }

  ngOnInit() {
  }

}

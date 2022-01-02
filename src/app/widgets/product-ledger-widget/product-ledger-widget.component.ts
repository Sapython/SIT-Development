import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-ledger-widget',
  templateUrl: './product-ledger-widget.component.html',
  styleUrls: ['./product-ledger-widget.component.scss'],
})
export class ProductLedgerWidgetComponent implements OnInit {
  @Input() Bakery: string = "TIRUPATI BAKERS";
  @Input() ItemName: string = "Biscuit";
  @Input() Safequantity:string = "98Kg";
  @Input() Damagequantity:string = "28Kg";
  @Input() Suppcode:string = "123XYZ0";
  @Input() Price:string = "23245";
  constructor() { }

  ngOnInit() {}

}

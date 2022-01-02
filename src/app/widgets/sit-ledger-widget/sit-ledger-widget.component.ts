import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sit-ledger-widget',
  templateUrl: './sit-ledger-widget.component.html',
  styleUrls: ['./sit-ledger-widget.component.scss'],
})
export class SitLedgerWidgetComponent implements OnInit {
  @Input() Bakery: string = "TIRUPATI BAKERS";
  @Input() ItemName: string = "Biscuit";
  @Input() Duedate:string = "12/12/2020";
  @Input() Suppcode:string = "123XYZ0";
  @Input() Moveto:string = "Recieved";
  constructor() { }

  ngOnInit() {}

}

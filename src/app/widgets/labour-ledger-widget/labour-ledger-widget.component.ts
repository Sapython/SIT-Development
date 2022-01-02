import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-labour-ledger-widget',
  templateUrl: './labour-ledger-widget.component.html',
  styleUrls: ['./labour-ledger-widget.component.scss'],
})
export class LabourLedgerWidgetComponent implements OnInit {
  @Input() Name:string = "RAMLOCHAN";
  @Input() Lastname:string = "VISHWAKARMA";
  @Input() Code:string = "123XYZ0";
  @Input() Paid:number = 2324;
  constructor() { }

  ngOnInit() {}

}

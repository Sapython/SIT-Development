import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sit-ledger-widget',
  templateUrl: './sit-ledger-widget.component.html',
  styleUrls: ['./sit-ledger-widget.component.scss'],
})
export class SitLedgerWidgetComponent implements OnInit {
  @Input() bakery: string = "TIRUPATI BAKERS";
  @Input() itemName: string = "Biscuit";
  @Input() dueDate: string = "12 Dec";
  @Input() suppCode: string = "123XYZ0";
  @Input() moveTo: string = "Recieved";

  @Input() dispatchDate: string;
  @Input() delivery: string;
  @Input() expectedDelivery: string;
  @Input() gateEntryDate: string;
  @Input() gateEntryNo: string;
  @Input() mfgLocation: string;
  @Input() productCode: string;
  @Input() productName: string;
  @Input() quantity: number;
  @Input() recPlantDesc: string;
  @Input() remarks: string;
  @Input() suppPlant: string;
  @Input() suppPlantDesc: string;
  @Input() storageLocation: string;
  @Input() transName: string;
  @Input() vehicleNo: string;

  displayMoreDetails: boolean = false;

  constructor() { }

  ngOnInit() { }

}

import { Component, OnInit } from '@angular/core';
import { dalaLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-dala-ledger',
  templateUrl: './dala-ledger.page.html',
  styleUrls: ['./dala-ledger.page.scss'],
})
export class DalaLedgerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = [1, 2, 3];

  dalaLedgers: dalaLedgerData[] = [
    {
      charge: 30,
      driverName: "John Doe",
      driverImage: "https://www.w3schools.com/howto/img_avatar.png",
      driverNumber: "+254712345678",
      driverId: "123456789",
      ledgerNo: "123456789",
      coordinator: "John Doe"
    }
  ];
}   

import { Component, OnInit } from '@angular/core';
import { dalaLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.page.html',
  styleUrls: ['./driver-list.page.scss'],
})
export class DriverListPage implements OnInit {
  items = [1,2,3]
  constructor() { }

  ngOnInit() {
  }
  dalaLedgers: dalaLedgerData[] = [
    {
      charge: 30,
      driverName: "John Doe",
      driverImage: "https://www.w3schools.com/howto/img_avatar.png",
      driverNumber: "+254712345678",
      driverId: "123456789",
      ledgerNo: "123456789",
      coordinator: "John Doe",
    },
    {
      charge: 30,
      driverName: "John Doe",
      driverImage: "https://www.w3schools.com/howto/img_avatar.png",
      driverNumber: "+254712345678",
      driverId: "123456789",
      ledgerNo: "123456789",
      coordinator: "John Doe",
    },
    {
      charge: 30,
      driverName: "John Doe",
      driverImage: "https://www.w3schools.com/howto/img_avatar.png",
      driverNumber: "+254712345678",
      driverId: "123456789",
      ledgerNo: "123456789",
      coordinator: "John Doe",
    },
    {
      charge: 30,
      driverName: "John Doe",
      driverImage: "https://www.w3schools.com/howto/img_avatar.png",
      driverNumber: "+254712345678",
      driverId: "123456789",
      ledgerNo: "123456789",
      coordinator: "John Doe",
    }
  ];
}

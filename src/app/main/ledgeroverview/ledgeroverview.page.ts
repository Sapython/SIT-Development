import { Component, OnInit } from '@angular/core';
import { dalaLedgerData, expenseledgerData, LabourLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-ledgeroverview',
  templateUrl: './ledgeroverview.page.html',
  styleUrls: ['./ledgeroverview.page.scss'],
})
export class LedgeroverviewPage implements OnInit {
  items = [1,2,3]
  constructor() { }

  ngOnInit() {
  }
  labourledger: LabourLedgerData[] = [
    {
      Name: "Ramlochan",
      Lastname: "Vishwakarma",
      Code: "123XYZ0",
      Paid: 2324,

    },
    {
      Name: "Ramlochan",
      Lastname: "Vishwakarma",
      Code: "123XYZ0",
      Paid: 2324,

    },
    {
      Name: "Ramlochan",
      Lastname: "Vishwakarma",
      Code: "123XYZ0",
      Paid: 2324,

    }
  ]
  dalaledgers: dalaLedgerData[] = [
    {
      driverName: "Sanjay Pandey",
      driverImage: "https://i.pravatar.cc/300",
      driverNumber: "9876543210",
      driverId: "123XYZ0",
      charge: 2324,
      ledgerNo: "1234xyz",
      coordinator: "Shubham kumar",
    },
    {
      driverName: "Sanjay Pandey",
      driverImage: "https://i.pravatar.cc/300",
      driverNumber: "9876543210",
      driverId: "123XYZ0",
      charge: 2324,
      ledgerNo: "1234xyz",
      coordinator: "Shubham kumar",
    },
    {
      driverName: "Sanjay Pandey",
      driverImage: "https://i.pravatar.cc/300",
      driverNumber: "9876543210",
      driverId: "123XYZ0",
      charge: 2324,
      ledgerNo: "1234xyz",
      coordinator: "Shubham kumar",
    }
  ]
  expenseledger: expenseledgerData[] = [
    {
      expenseName: "Transport",
      ledgerNo: "1234xyz",
      charge: 2324,
      condition: "danger",
      servicable: true,
      reason: "",
      date: "12/12/2020",
      starred: false,
    },
    {
      expenseName: "Transport",
      ledgerNo: "1234xyz",
      charge: 2324,
      condition: "danger",
      servicable: true,
      reason: "",
      date: "12/12/2020",
      starred: false,
    },
    {
      expenseName: "Transport",
      ledgerNo: "1234xyz",
      charge: 2324,
      condition: "danger",
      servicable: true,
      reason: "",
      date: "12/12/2020",
      starred: false,
    }
  ]

}

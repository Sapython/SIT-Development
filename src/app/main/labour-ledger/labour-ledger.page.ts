import { Component, OnInit } from '@angular/core';
import { LabourLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-labour-ledger',
  templateUrl: './labour-ledger.page.html',
  styleUrls: ['./labour-ledger.page.scss'],
})
export class LabourLedgerPage implements OnInit {

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

    },
    {
      Name: "Ramlochan",
      Lastname: "Vishwakarma",
      Code: "123XYZ0",
      Paid: 2324,

    }
  ]
}

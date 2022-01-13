import { Component, OnInit } from '@angular/core';
import { sitLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-recieved-sit',
  templateUrl: './recieved-sit.page.html',
  styleUrls: ['./recieved-sit.page.scss'],
})
export class RecievedSitPage implements OnInit {
  items = [1, 2, 3];
  constructor() { }
  sitledger: sitLedgerData[] = [
    {
      dispatchDate: "12 Dec 2021",
      delivery: "12 Dec 2021",
      expectedDelivery: "12 Dec 2021",
      gateEntryDate: "12 Dec 2021",
      gateEntryNo: "123456XZ",
      mfgLocation: "Tirupati",
      productCode: "123456XZ",
      productName: "Biscuit",
      quantity: 30,
      recPlantDesc: "Tirupati",
      remarks: "Biscuit",
      suppPlant: "123456XZ",
      suppPlantDesc: "Tirupati",
      storageLocation: "Tirupati",
      transName: "Biscuit",
      vehicleNo: "123456XZ",
      status: "pending",
    },
    {
      dispatchDate: "12 Dec 2021",
      delivery: "12 Dec 2021",
      expectedDelivery: "12 Dec 2021",
      gateEntryDate: "12 Dec 2021",
      gateEntryNo: "123456XZ",
      mfgLocation: "Tirupati",
      productCode: "123456XZ",
      productName: "Biscuit",
      quantity: 30,
      recPlantDesc: "Tirupati",
      remarks: "Biscuit",
      suppPlant: "123456XZ",
      suppPlantDesc: "Tirupati",
      storageLocation: "Tirupati",
      transName: "Biscuit",
      vehicleNo: "123456XZ",
      status: "pending",
    },
    {
      dispatchDate: "12 Dec 2021",
      delivery: "12 Dec 2021",
      expectedDelivery: "12 Dec 2021",
      gateEntryDate: "12 Dec 2021",
      gateEntryNo: "123456XZ",
      mfgLocation: "Tirupati",
      productCode: "123456XZ",
      productName: "Biscuit",
      quantity: 30,
      recPlantDesc: "Tirupati",
      remarks: "Biscuit",
      suppPlant: "123456XZ",
      suppPlantDesc: "Tirupati",
      storageLocation: "Tirupati",
      transName: "Biscuit",
      vehicleNo: "123456XZ",
      status: "pending",
    }
  ]
  ngOnInit() {
  }

}

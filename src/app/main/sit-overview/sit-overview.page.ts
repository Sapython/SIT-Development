import { Component, OnInit } from '@angular/core';
import { sitLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-sit-overview',
  templateUrl: './sit-overview.page.html',
  styleUrls: ['./sit-overview.page.scss'],
})
export class SitOverviewPage implements OnInit {
  items = [1,2,3]
  constructor() { }

  ngOnInit() {
  }
  sitLedgers: sitLedgerData[] = [
    {
      dispatchDate: "23 July 2021",
      delivery: "2333441",
      expectedDelivery: "30 July 2021",
      gateEntryDate: "25 July 2021",
      gateEntryNo: "666",
      mfgLocation: "D69",
      productCode: "112233",
      productName: "Biscoot",
      quantity: 360,
      recPlantDesc: "145",
      remarks: "Received",
      suppPlant: "D69",
      suppPlantDesc: "Tirupati Bakers",
      storageLocation: "Prayagraj",
      transName: "Jain Roadways",
      vehicleNo: "HR51AB1314",
      status: "pending",
    },
    {
      dispatchDate: "23 July 2021",
      delivery: "2333441",
      expectedDelivery: "30 July 2021",
      gateEntryDate: "25 July 2021",
      gateEntryNo: "666",
      mfgLocation: "D69",
      productCode: "112233",
      productName: "Biscoot",
      quantity: 360,
      recPlantDesc: "145",
      remarks: "Received",
      suppPlant: "D69",
      suppPlantDesc: "Tirupati Bakers",
      storageLocation: "Prayagraj",
      transName: "Jain Roadways",
      vehicleNo: "HR51AB1314",
      status: "pending",
    }
  ];
  recievedLedgers: sitLedgerData[] = [
    {
      dispatchDate: "23 July 2021",
      delivery: "2333441",
      expectedDelivery: "30 July 2021",
      gateEntryDate: "25 July 2021",
      gateEntryNo: "666",
      mfgLocation: "D69",
      productCode: "112233",
      productName: "Biscoot",
      quantity: 360,
      recPlantDesc: "145",
      remarks: "Received",
      suppPlant: "D69",
      suppPlantDesc: "Tirupati Bakers",
      storageLocation: "Prayagraj",
      transName: "Jain Roadways",
      vehicleNo: "HR51AB1314",
      status: "recieved",
    },
    {
      dispatchDate: "23 July 2021",
      delivery: "2333441",
      expectedDelivery: "30 July 2021",
      gateEntryDate: "25 July 2021",
      gateEntryNo: "666",
      mfgLocation: "D69",
      productCode: "112233",
      productName: "Biscoot",
      quantity: 360,
      recPlantDesc: "145",
      remarks: "Received",
      suppPlant: "D69",
      suppPlantDesc: "Tirupati Bakers",
      storageLocation: "Prayagraj",
      transName: "Jain Roadways",
      vehicleNo: "HR51AB1314",
      status: "recieved",
    }
  ];
  unloadedLedgers: sitLedgerData[] = [
    {
      dispatchDate: "23 July 2021",
      delivery: "2333441",
      expectedDelivery: "30 July 2021",
      gateEntryDate: "25 July 2021",
      gateEntryNo: "666",
      mfgLocation: "D69",
      productCode: "112233",
      productName: "Biscoot",
      quantity: 360,
      recPlantDesc: "145",
      remarks: "Received",
      suppPlant: "D69",
      suppPlantDesc: "Tirupati Bakers",
      storageLocation: "Prayagraj",
      transName: "Jain Roadways",
      vehicleNo: "HR51AB1314",
      status: "unloaded",
    },
    {
      dispatchDate: "23 July 2021",
      delivery: "2333441",
      expectedDelivery: "30 July 2021",
      gateEntryDate: "25 July 2021",
      gateEntryNo: "666",
      mfgLocation: "D69",
      productCode: "112233",
      productName: "Biscoot",
      quantity: 360,
      recPlantDesc: "145",
      remarks: "Received",
      suppPlant: "D69",
      suppPlantDesc: "Tirupati Bakers",
      storageLocation: "Prayagraj",
      transName: "Jain Roadways",
      vehicleNo: "HR51AB1314",
      status: "unloaded",
    }
  ];
}

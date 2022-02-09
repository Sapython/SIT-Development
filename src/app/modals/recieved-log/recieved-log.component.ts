import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { UserData } from 'src/app/structures/user.structure';


@Component({
  selector: 'app-recieved-log',
  templateUrl: './recieved-log.component.html',
  styleUrls: ['./recieved-log.component.scss'],
})
export class RecievedLogComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private databaseService:DatabaseService,
    ) { }
  @Input() sitId
  dispatchDate: string;
  name:string;
  expectedDelivery: string;
  Deliverycode: string;
  coordinator:UserData;
  recviedVehicleNumber:string;
  vehicleNumber: string;
  gateNumber: string;
  vehicleType: string;
  sitID: string;
  timestamp: any;
  products: any;
  ngOnInit() {
    this.databaseService.getRecievedSit(this.sitId).then((sit:any) => {
      sit = sit.data()
      this.recviedVehicleNumber = sit.recVehicleNumber;
      this.vehicleNumber = sit.vehicleNumber;
      this.gateNumber = sit.gateNumber;
      this.vehicleType = sit.vehicleType;
      this.sitID = sit.sitID;
      this.databaseService.getUser(sit.coordinatorId).then((coordinator:any) => {
        this.coordinator = coordinator.data();
      })
      this.databaseService.getSit(this.sitID).then((sit:any) => {
        this.name = sit.data().supplierName;
        this.expectedDelivery = sit.data().sit[0].expectedDelivery;
        this.Deliverycode = sit.data().sit[0].deliveryCode;
        this.products = sit.data().sit;
        this.dispatchDate = sit.data().sit[0].dispatchDate;
      })
    });
  }
  closeModal() {
    this.modalController.dismiss();
  }
  toNumber(input:string){
    return Number(input);
  }
}

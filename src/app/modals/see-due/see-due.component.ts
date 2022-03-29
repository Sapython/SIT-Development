import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-see-due',
  templateUrl: './see-due.component.html',
  styleUrls: ['./see-due.component.scss'],
})
export class SeeDueComponent implements OnInit {
  @Input() userId:string;
  @Input() amount: number;
  @Input() sitName: string;
  constructor(private modalController: ModalController,private databaseService:DatabaseService) { }
  workings:any[] = [];
  foundWorking:boolean = false;
  ngOnInit() {
    this.databaseService.getAllSit().then((data:any)=>{
      data.forEach((sit:any) => {
        this.databaseService.getUnloadedSit(sit.id).then((unloaded:any)=>{
          if(unloaded.data()){
            unloaded.data().labourCharges.forEach((labourCharge:any)=>{
              if(labourCharge.id===this.userId){
                this.foundWorking = true;
                labourCharge.supplierCode = sit.data().supplierCode;
                labourCharge.supplierName = sit.data().supplierName;
                labourCharge.sitId = sit.id;
                this.workings.push(labourCharge)
              }
            })
          }
        })
      })
    })
  }
  closeModal() {
    this.modalController.dismiss();
  }
}

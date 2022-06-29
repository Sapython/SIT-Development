import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LabourWork } from 'src/app/main/labour-ledger/labour-ledger.page';
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
  @Input() workings:LabourWork[] = [];
  constructor(private modalController: ModalController,private databaseService:DatabaseService) { }
  foundWorking:boolean = true;
  closeModal() {
    this.modalController.dismiss();
  }
  ngOnInit(): void {
      console.log("WORKINGS",this.workings);
  }
}

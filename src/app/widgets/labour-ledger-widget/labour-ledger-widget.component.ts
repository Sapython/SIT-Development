import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SeeDueComponent } from 'src/app/modals/see-due/see-due.component';

@Component({
  selector: 'app-labour-ledger-widget',
  templateUrl: './labour-ledger-widget.component.html',
  styleUrls: ['./labour-ledger-widget.component.scss'],
})
export class LabourLedgerWidgetComponent implements OnInit {
  @Input() name:string = "RAMLOCHAN";
  @Input() uid:string = "123XYZ0";
  @Input() amountPaid:number = 2324;
  @Input() userImage:string = '';
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    // slice uid to first 10 characters
    this.name = this.name.slice(0,20);
  }
  async seedue() {
    const modal = await this.modalController.create({
      component: SeeDueComponent,
      componentProps:{
        userId:this.uid,
        amount: this.amountPaid,
        sitName: this.name,
      }
    });
    return await modal.present();
  }
}

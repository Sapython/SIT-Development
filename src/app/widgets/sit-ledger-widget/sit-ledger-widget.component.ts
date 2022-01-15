import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RecievedLogComponent } from 'src/app/modals/recieved-log/recieved-log.component';
import { UnloadedLogComponent } from 'src/app/modals/unloaded-log/unloaded-log.component';

@Component({
  selector: 'app-sit-ledger-widget',
  templateUrl: './sit-ledger-widget.component.html',
  styleUrls: ['./sit-ledger-widget.component.scss'],
})
export class SitLedgerWidgetComponent implements OnInit {
  @Input() bakery: string = "TIRUPATI BAKERS";
  @Input() itemName: string = "Biscuit";
  @Input() dueDate: string = "12 Dec";
  @Input() suppCode: string = "123XYZ0";
  @Input() moveTo: string = "Recieved";

  @Input() dispatchDate: string;
  @Input() delivery: string;
  @Input() expectedDelivery: string;
  @Input() gateEntryDate: string;
  @Input() gateEntryNo: string;
  @Input() mfgLocation: string;
  @Input() productCode: string;
  @Input() productName: string;
  @Input() quantity: number;
  @Input() recPlantDesc: string;
  @Input() remarks: string;
  @Input() suppPlant: string;
  @Input() suppPlantDesc: string;
  @Input() storageLocation: string;
  @Input() transName: string;
  @Input() vehicleNo: string;
  @Input() status:"uploaded"|"pending"|"recieved"|"unloaded";

  displayMoreDetails: boolean = false;

  constructor(private router:Router, public modalController: ModalController) { }
  async recievedlog() {
    const modal = await this.modalController.create({
      component: RecievedLogComponent,
    });
    return await modal.present();
  }
  async unloadedlog() {
    const modal = await this.modalController.create({
      component: UnloadedLogComponent,
    });
    return await modal.present();
  }
  ngOnInit() { }
  navigate(path:string){
    this.router.navigateByUrl('/main/app/'+path);
  }

}

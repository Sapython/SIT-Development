import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ReceivedLogComponent } from 'src/app/modals/received-log/received-log.component';
import { UnloadedLogComponent } from 'src/app/modals/unloaded-log/unloaded-log.component';
import { DataProvider } from 'src/app/providers/data.provider';
import { SIT, Stock } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-sit-ledger-widget',
  templateUrl: './sit-ledger-widget.component.html',
  styleUrls: ['./sit-ledger-widget.component.scss'],
})
export class SitLedgerWidgetComponent implements OnInit {
  @Input() bakery: string = "TIRUPATI BAKERS";
  @Input() dueDate: string = "12 Dec";
  @Input() suppCode: string = "123XYZ0";
  @Input() dispatchDate: string;
  @Input() deliveryCode: string;
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
  @Input() status:"uploaded"|"pending"|"received"|"unloaded";
  @Input() allData:SIT;
  displayMoreDetails: boolean = false;
  constructor(
    private router:Router,
    public modalController: ModalController,
    public dataProvider:DataProvider) {
   }
  async receivedLog() {
    const modal = await this.modalController.create({
      component: ReceivedLogComponent,
      componentProps:{
        sitId:this.allData.id,
      }
    });
    return await modal.present();
  }
  async unloadedLog() {
    const modal = await this.modalController.create({
      component: UnloadedLogComponent,
      componentProps:{
        sitId:this.allData.id,
      }
    });
    return await modal.present();
  }
  ngOnInit() {
    // console.log(this.allData);
   }
  navigate(path:string){
    this.dataProvider.dataOne = this.allData.id;
    // alert(this.dataProvider.dataOne);
    this.router.navigateByUrl('/main/app/'+path+'?id='+this.allData.id);
  }

}

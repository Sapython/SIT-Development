import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RecievedLogComponent } from 'src/app/modals/recieved-log/recieved-log.component';
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
  @Input() status:"uploaded"|"pending"|"recieved"|"unloaded";
  @Input() allData:SIT;
  displayMoreDetails: boolean = false;
  constructor(
    private router:Router,
    public modalController: ModalController,
    private dataProvider:DataProvider) {
   }
  async recievedlog() {
    const modal = await this.modalController.create({
      component: RecievedLogComponent,
      componentProps:{
        sitId:this.allData.id,
      }
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
    console.log(this.allData);
    this.dataProvider.dataOne = this.allData.id;
    alert(this.dataProvider.dataOne);
    this.router.navigateByUrl('/main/app/'+path+'?id='+this.allData.id);
  }

}

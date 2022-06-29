import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ReceivedLogComponent } from 'src/app/modals/received-log/received-log.component';
import { UnloadedLogComponent } from 'src/app/modals/unloaded-log/unloaded-log.component';
import { DataProvider } from 'src/app/providers/data.provider';
import { SIT } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-sitdetailpopover',
  templateUrl: './sitdetailpopover.component.html',
  styleUrls: ['./sitdetailpopover.component.scss'],
})
export class SitdetailpopoverComponent {
  @Input() status: string;
  @Input() allData: SIT;

  constructor(
    private router: Router,
    public modalController: ModalController,
    public dataProvider: DataProvider
  ) {}

  async receivedLog() {
    const modal = await this.modalController.create({
      component: ReceivedLogComponent,
      componentProps: {
        sitId: this.allData.id,
      },
    });
    return await modal.present();
  }

  async unloadedLog() {
    const modal = await this.modalController.create({
      component: UnloadedLogComponent,
      componentProps: {
        sitId: this.allData.id,
      },
    });
    return await modal.present();
  }

  navigate(path: string) {
    this.dataProvider.dataOne = this.allData.id;
    // alert(this.dataProvider.dataOne);
    this.router.navigateByUrl('/main/app/' + path + '?id=' + this.allData.id);
  }
}

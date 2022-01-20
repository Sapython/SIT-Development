import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { actionsAlert, confirmationAlert, dialogAlert, messageAlert } from 'src/app/structures/method.structure';
import { SecurityComponent } from '../../models/security/security.component';
import { TrackingComponent } from '../../models/tracking/tracking.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  constructor(private modalController: ModalController) { }
  ngOnInit() {
  }
  async showTrackingModal(){
    const modal = await this.modalController.create({
      component: TrackingComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1]
    })
    return await modal.present();
  }
  async showSecurityModal(){
    const modal = await this.modalController.create({
      component: SecurityComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1]
    })
    return await modal.present();
  }

}

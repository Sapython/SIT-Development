import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminDatabaseService } from 'src/app/services/admin-database.service';
import { actionsAlert, confirmationAlert, dialogAlert, messageAlert } from 'src/app/structures/method.structure';
import { SecurityComponent } from '../../models/security/security.component';
import { TrackingComponent } from '../../models/tracking/tracking.component';
import { Analytics, logEvent,setCurrentScreen, setUserProperties, setUserId } from '@angular/fire/analytics';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  constructor(private analytics:Analytics,private modalController: ModalController,public db:AdminDatabaseService) { }
  ngOnInit() {
  }
  logData(data:any){
    console.log(data);
  }
  async showTrackingModal(){
    const modal = await this.modalController.create({
      component: TrackingComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1]
    })
    logEvent(this.analytics,'viewAdminTracking');
    return await modal.present();
  }
  async showSecurityModal(){
    const modal = await this.modalController.create({
      component: SecurityComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1]
    })
    logEvent(this.analytics,'viewAdminSecurity');
    return await modal.present();
  }
  toggleVal(event:any){
    return event.detail.checked;
  }
  selectVal(event:any){
    return event.detail.value;
  }
}

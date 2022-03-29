import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { actionsAlert, confirmationAlert, dialogAlert, messageAlert } from 'src/app/structures/method.structure';
import { ManageUserComponent } from '../../models/manage-user/manage-user.component';
import { Analytics, logEvent,setCurrentScreen, setUserProperties, setUserId } from '@angular/fire/analytics';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private analytics:Analytics,private modalController: ModalController) { }
  deleteAlert(item){

  }
  saveToFavorite(item){}
  ngOnInit() {
  }
  segmentChanged(event:any){
    console.log(event);
  }
  alerts:messageAlert[] | confirmationAlert[] | dialogAlert[] | actionsAlert[] = [
    {
      title:'Wrong vehicle number was entered 5 times',
      status:'danger',
      description:'The vehicle number entered is wrong. Please check with the coordinator',
      date:'12/05/2022',
      type:'messageAlert'
    }
  ];
  async openUsersModal(){
    const userModal = await this.modalController.create({
      component:ManageUserComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1]
    })
    logEvent(this.analytics,'viewAdminUsers');
    await userModal.present();
  }
}

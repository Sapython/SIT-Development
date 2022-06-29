import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { AdminDatabaseService } from 'src/app/services/admin-database.service';
import { BasicUser } from 'src/app/structures/method.structure';
import { UserData } from 'src/app/structures/user.structure';
import { UserInfoComponent } from '../../popups/user-info/user-info.component';
import { Analytics, logEvent,setCurrentScreen, setUserProperties, setUserId } from '@angular/fire/analytics';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit, OnDestroy {
  usersSubscription:Subscription = Subscription.EMPTY;
  constructor(private analytics:Analytics,public modalController: ModalController,private popoverController: PopoverController,public db:AdminDatabaseService) { }
  users:UserData[] = []
  ngOnInit() {
    this.usersSubscription = this.db.getUsersSubscription().subscribe(users=>{
      this.users=[];
      users.forEach((user:any)=>{
        this.users.push(user)
      })
    })
  }
  async manageUser(user:any){
    const manageUserPopup = await this.popoverController.create({
      component:UserInfoComponent,
      componentProps:{
        user:user
      },
    })
    logEvent(this.analytics,'viewAdminUserInfo');
    await manageUserPopup.present();
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }  
}

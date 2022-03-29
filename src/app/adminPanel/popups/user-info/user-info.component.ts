import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { access } from 'fs';
import { AdminDatabaseService } from 'src/app/services/admin-database.service';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { BasicUser } from 'src/app/structures/method.structure';
import { UserData } from 'src/app/structures/user.structure';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() user:UserData| undefined;
  constructor(public db:AdminDatabaseService,public popoverController: PopoverController,private alertify:AlertsAndNotificationsService,private databaseService:DatabaseService) { }
  access:any[] = ['admin','supervisor','guest','worker'];
  ngOnInit() {}
  markAttendance(){
    this.databaseService.markAttendance(this.user.userId);
    this.alertify.presentToast('Attendance marked','info',2000);
  }
  changeAccess(event:any){
    if (!this.access.includes(event.detail.value)) { return false }
    this.databaseService.changeAccess(event.detail.value,this.user.userId);
    this.alertify.presentToast('Access changed to '+event.detail.value,'info',2000);
  }
  removeUser(){
    if(confirm('Are you sure you want to remove this user?')){
      this.db.userAction('remove',this.user.userId);
    }
  }
  blockUser(){
    if(confirm('Are you sure you want to block this user?')){
      this.db.userAction('block',this.user.userId);
    }
  }
  resetUser(){
    if(confirm('Are you sure you want to reset this user?')){
      this.db.userAction('reset',this.user.userId);
    }
  }

}

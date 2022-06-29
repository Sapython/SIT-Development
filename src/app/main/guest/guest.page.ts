import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProvider } from 'src/app/providers/data.provider';
import { AuthencationService } from 'src/app/services/authencation.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {

  constructor(public authService:AuthencationService,private dataProvider:DataProvider,private router:Router,private alertify:AlertsAndNotificationsService) { }
  allowedAccess=['supervisor','worker','admin'];
  ngOnInit() {
  }
  checkStatus(){
    if(this.allowedAccess.includes(this.dataProvider.userData.access.access)){
      this.router.navigate(['/main/app/home']);
    } else {
      this.alertify.presentToast('Nope. You are still not allowed to access the app. Ask admin to change your access level.','error',3000)
    }
  }
}

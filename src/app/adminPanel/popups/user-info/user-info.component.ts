import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AdminDatabaseService } from 'src/app/services/admin-database.service';
import { BasicUser } from 'src/app/structures/method.structure';
import { UserData } from 'src/app/structures/user.structure';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() user:UserData| undefined;
  constructor(public db:AdminDatabaseService,public popoverController: PopoverController) { }

  ngOnInit() {}
  removeUser(){
    this.db.userAction('remove',this.user.userId);;
  }
  blockUser(){
    this.db.userAction('block',this.user.userId);
  }
  resetUser(){
    this.db.userAction('reset',this.user.userId);
  }

}

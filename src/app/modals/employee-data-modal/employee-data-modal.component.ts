import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { UserAccess, UserData } from 'src/app/structures/user.structure';

@Component({
  selector: 'app-employee-data-modal',
  templateUrl: './employee-data-modal.component.html',
  styleUrls: ['./employee-data-modal.component.scss'],
})
export class EmployeeDataModalComponent implements OnInit {

  @Input() user:UserData;
  constructor(public modalController:ModalController,private alertify:AlertsAndNotificationsService,private dbService:DatabaseService) { }

  ngOnInit() {}
  markAttendance(userId:string){
    console.log(userId)
    this.dbService.setSpecificUserData('attendanceDate',new Date(),userId).then(()=>{
      this.alertify.presentToast('Attendance Marked');
    })
  }
  deleteUser(userId:string){
    console.log(userId)
  }
  changeAccess(userId:string,access:UserAccess){
    console.log(userId)
  }
  isPresent(date:any){
    const dayA = date.toDate();
    const dayB = new Date();
    return (dayA.toDateString() === dayB.toDateString())
  }
}

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
  markedAttendance:boolean = false;
  marking:boolean = false;
  @Input() user:UserData;
  constructor(public modalController:ModalController,private alertify:AlertsAndNotificationsService,private dbService:DatabaseService) { }

  ngOnInit() {
    this.markedAttendance = this.isPresent(this.user?.attendanceDate)
  }
  markAttendance(userId:string){
    console.log(userId)
    this.marking = true;
    this.dbService.markAttendance(userId).then(()=>{
      this.markedAttendance = true;
      this.user.attendanceCount++;
      this.user.attendanceDate = new Date();
      this.alertify.presentToast('Attendance Marked');
    }).catch((err)=>
    {
      this.alertify.presentToast(err)
    }).finally(()=>{
      this.marking = false;
    })
  }
  deleteUser(userId:string){
    console.log(userId)
  }
  changeAccess(userId:string,access:UserAccess){
    console.log(userId)
  }
  isPresent(date:any){
    if (!(date instanceof Date)){
      var dayA:any = date.toDate();
    } else {
      var dayA:any = date;
    }
    const dayB = new Date();
    return (dayA.toDateString() === dayB.toDateString())
  }
}

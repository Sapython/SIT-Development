import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.page.html',
  styleUrls: ['./account-page.page.scss'],
})
export class AccountPagePage implements OnInit {
  email: string = "";
  access: string = "";
  attendance: number = 0;
  emailVerified:boolean = false;
  phoneNumber:string = "";
  userId: string = "";
  editable:boolean = true;
  name:string = "";
  userImage:string = "";
  userDataForm:FormGroup;
  constructor(private dataProvider:DataProvider,private databaseService:DatabaseService) {}
  ngOnInit() {
    this.email = this.dataProvider.userData?.email;
    this.access = this.dataProvider.userData?.access.access;
    this.attendance = this.dataProvider.userData?.attendanceCount;
    this.emailVerified = this.dataProvider.userData?.emailVerified;
    this.phoneNumber = this.dataProvider.userData?.phoneNumber;
    this.userId = this.dataProvider.userData?.userId;
    this.name = this.dataProvider.userData?.displayName;
    this.userImage = this.dataProvider.userData?.photoURL;
    this.userDataForm = new FormGroup({
      name: new FormControl(this.name,[Validators.required]),
      email: new FormControl(this.email,[Validators.required,Validators.email]),
      phoneNumber: new FormControl(this.phoneNumber,[Validators.required])
    })
  }
  save(){
    if(this.userDataForm.valid){
      this.databaseService.saveUserData(this.name,this.email,this.phoneNumber,this.userId)
    }
  }
  setValue(type:'email'|'name'|'phoneNumber',event){
    if (type==='email'){
      this.email = event.detail.value;
    } else if (type==='name'){
      this.name = event.detail.value;
    } else if (type==='phoneNumber'){
      this.phoneNumber = event.detail.value;
    }
  }
}

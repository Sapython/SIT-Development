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
  editable:boolean = false;
  name:string = "";
  userImage:string = "";
  userDataForm:FormGroup;
  constructor(public dataProvider:DataProvider,private databaseService:DatabaseService) {}
  ngOnInit() {
    this.userDataForm = new FormGroup({
      name: new FormControl(this.dataProvider.userData?.displayName,[Validators.required]),
      email: new FormControl(this.dataProvider.userData?.email,[Validators.required,Validators.email]),
      phoneNumber: new FormControl(this.dataProvider.userData?.phoneNumber,[Validators.required]),
      status: new FormControl(this.dataProvider.userData?.status.access,[Validators.required]),
      nickName: new FormControl(this.dataProvider.userData?.nickName,[Validators.required]),
      currentAddress: new FormControl(this.dataProvider.userData?.currentAddress,[Validators.required]),
      permanentAddress: new FormControl(this.dataProvider.userData?.permanentAddress,[Validators.required]),
      bloodGroup: new FormControl(this.dataProvider.userData?.bloodGroup.bloodGroup,[Validators.required]),
      department: new FormControl(this.dataProvider.userData?.department.department,[Validators.required]),
      designation: new FormControl(this.dataProvider.userData?.designation.designation,[Validators.required]),
    })
  }
  save(){
    if(this.userDataForm.valid){
      this.databaseService.saveUserData(this.name,this.email,this.phoneNumber,this.userId)
    }
  }
  setValue(type:'email'|'name'|'phoneNumber'|'status.access'|'nickName'|'currentAddress'|'permanentAddress',event){
    if (type==='email'){
      this.email = event.detail.value;
      this.databaseService.setUserData(type,this.email)
    } else if (type==='name'){
      this.name = event.detail.value;
      this.databaseService.setUserData(type,this.name)
    } else if (type==='phoneNumber'){
      this.phoneNumber = event.detail.value;
      this.databaseService.setUserData(type,this.phoneNumber)
    } else if (type==='status.access'){
      this.access = event.detail.value;
      this.databaseService.setUserData(type,this.access)
    } else if (type==='nickName'){
      this.name = event.detail.value;
      this.databaseService.setUserData(type,this.name)
    } else if (type==='currentAddress'){
      this.name = event.detail.value;
      this.databaseService.setUserData(type,this.name)
    } else if (type==='permanentAddress'){
      this.name = event.detail.value;
      this.databaseService.setUserData(type,this.name)
    }
  }
}

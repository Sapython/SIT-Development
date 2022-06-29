import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { bloodGroup, department, designation, UserStatus } from 'src/app/structures/user.structure';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.page.html',
  styleUrls: ['./account-page.page.scss'],
})
export class AccountPagePage implements OnInit, OnDestroy {
  @ViewChild('image') imageElement:any;
  email: string = "";
  access: string = "";
  attendance: number = 0;
  emailVerified:boolean = false;
  phoneNumber:string = "";
  userId: string = "";
  editable:boolean = false;
  name:string = "";
  userDataForm:FormGroup;
  completed:boolean = false;
  constructor(public dataProvider:DataProvider,private databaseService:DatabaseService) {}
  usersSubscription:Subscription = Subscription.EMPTY;
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
    this.usersSubscription = this.dataProvider.gettingUserData.subscribe((data)=>{
      if(data==='completed'){
        this.completed = true;
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
    })
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
  save(){
    if(this.userDataForm.valid){
      this.userDataForm.value.bloodGroup = {bloodGroup:this.userDataForm.value.bloodGroup}
      this.userDataForm.value.department = {department:this.userDataForm.value.department}
      this.userDataForm.value.designation = {designation:this.userDataForm.value.designation}
      this.userDataForm.value.status = {access:this.userDataForm.value.status,isOnline:false}
      if(confirm('Are you sure you?')){
        console.log(this.dataProvider.userData.userId , this.completed)
        if (this.imageElement.nativeElement.files[0]){
          this.databaseService.upload('users/'+this.dataProvider.userData.userId+'/profileImage',this.imageElement.nativeElement.files[0]).then((url)=>{
            this.databaseService.updateUserImage(url,this.dataProvider.userData.userId).then(()=>{
              alert('Image Updated Successfully')
              this.editable = false;
            }).catch((error)=>{
              alert(error);
            })
          })
        }
        if (this.dataProvider.userData.userId){
          this.databaseService.updateUserData(this.userDataForm.value,this.dataProvider.userData.userId).then(()=>{
            alert('Data Updated Successfully')
            this.editable = false;
          }).catch((error)=>{
            alert(error)
          })
        } else {
          alert('Please wait to load your profile first.')
        }
      } else {
        return
      }
    } else {
      alert('Please fill all the fields')
    }
  }
  setValue(type:'email'|'name'|'phoneNumber'|'status.access'|'nickName'|'currentAddress'|'permanentAddress',event){
    return
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
export type editableFields = {
  name:string,
  email:string,
  photoURL:string,
  phoneNumber:string,
  status:UserStatus,
  nickName:string,
  currentAddress:string,
  permanentAddress:string,
  bloodGroup:bloodGroup,
  department:department,
  designation:designation,
}
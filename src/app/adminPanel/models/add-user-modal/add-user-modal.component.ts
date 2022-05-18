import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataProvider } from 'src/app/providers/data.provider';
import { AuthencationService } from 'src/app/services/authencation.service';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent implements OnInit, OnDestroy {
  constructor(
    public modalController: ModalController,
    private userDataService:UserDataService,
    private http: HttpClient,
    private alertify:AlertsAndNotificationsService,
    private dataProvider:DataProvider,
    private router:Router
  ) {}
  userAddSubscription:Subscription = Subscription.EMPTY;
  fileObject:File;
  ngOnInit() {
    // this.dataProvider.pageSetting.blur = true;
    // setTimeout(()=>{
    //   this.dataProvider.pageSetting.blur = false;
    // },5000);
  }
  addUserModal: FormGroup = new FormGroup({
    name: new FormControl('alpha', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('alpha123@alpha.rety', [Validators.required, Validators.email]),
    phone: new FormControl('+919517457295', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('alpha1234', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('alpha1234', [
      Validators.required,
      Validators.minLength(8),
    ]),
    role: new FormControl('worker', [Validators.required]),
    nickName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    currentAddress: new FormControl(' fdasf sdfsd fsd fsdf', [
      Validators.required,
      Validators.minLength(5),
    ]),
    permanentAddress: new FormControl('  tyryry rtyrty rtyrty', [
      Validators.required,
      Validators.minLength(5),
    ]),
    // photoUrl: new FormControl('', [Validators.required]),
    department: new FormControl('godown', [Validators.required]),
    designation: new FormControl('godownInCharge', [Validators.required]),
    bloodGroup: new FormControl('B+', [Validators.required]),
  });
  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  setFileSelection(file:any){
    this.fileObject = file.target.files[0];
  }
  async addUser() {
    console.log(this.addUserModal.value,this.fileObject);
    if (this.addUserModal.valid) {
      this.dataProvider.pageSetting.blur = true;
      this.userAddSubscription = this.http.post('https://us-central1-sit-manager.cloudfunctions.net/createUser',this.addUserModal.value).subscribe((result:any) => {
        console.log(result);
        this.userDataService.setCompleteUserData(
          result,
          {access:this.addUserModal.value.role},
          this.addUserModal.value.name,
          this.addUserModal.value.phone,
          {department:this.addUserModal.value.department},
          {designation:this.addUserModal.value.designation},
          {bloodGroup:this.addUserModal.value.bloodGroup},
          this.addUserModal.value.currentAddress,
          this.addUserModal.value.permanentAddress,
          this.addUserModal.value.nickName,
          ).then(()=>{
            this.dataProvider.pageSetting.blur = false;
            this.alertify.presentToast('User Added Successfully');
            this.router.navigate([''])
            this.modalController.dismiss();
          }).catch((error)=>{
            this.dataProvider.pageSetting.blur = false;
            this.alertify.presentToast(error);
          });
      },(error)=>{
        console.log(error);
        this.dataProvider.pageSetting.blur = false;
        this.alertify.presentToast(error.error.message,'error',6000);
      },()=>{
        this.dataProvider.pageSetting.blur = false;
        console.log('completed');
      });
    } else {
      this.alertify.presentToast('Please fill all the fields');
      console.log('invalid values');
    }
  }
  ngOnDestroy(): void {
    this.userAddSubscription.unsubscribe();
  }
}

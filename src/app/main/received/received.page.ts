import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import {
  Analytics,
  logEvent,
  setCurrentScreen,
  setUserProperties,
  setUserId,
} from '@angular/fire/analytics';
import { UserData } from 'src/app/structures/user.structure';

@Component({
  selector: 'app-received',
  templateUrl: './received.page.html',
  styleUrls: ['./received.page.scss'],
})
export class ReceivedPage implements OnInit, OnDestroy {
  receivedForm: FormGroup;
  vehicleNumber: FormControl = new FormControl('', [Validators.required]);
  vehicleType: FormControl = new FormControl('', [Validators.required]);
  supervisor: FormControl = new FormControl('', [Validators.required]);
  imageExists: boolean = false;
  imageFile: File;
  imageCodec: any;
  recVehicleNumber: string = '';
  recVehicleType: string = '';
  imageFormat: any;
  sitID: string;
  sitData:any;
  supervisors: any[] = [];
  vehicleVerified: boolean = false;
  recognizerSubscription: Subscription = Subscription.EMPTY;
  numberPlateImageUrl: string;
  paramsSubscription:Subscription = Subscription.EMPTY;
  constructor(
    private analytics: Analytics,
    private http: HttpClient,
    private activatedRouteSnapshot: ActivatedRoute,
    private databaseService: DatabaseService,
    private dataProvider: DataProvider,
    private alertify: AlertsAndNotificationsService,
    private navCtrl: NavController,
    private modalController: ModalController,
    private router:Router
  ) {
    this.paramsSubscription = this.activatedRouteSnapshot.queryParams.subscribe((params) => {
      // this.sitID = params.id;
    });
    this.receivedForm = new FormGroup({
      vehicleNumber: this.vehicleNumber,
      vehicleType: this.vehicleType,
      supervisor: this.supervisor,
    });
  }
  ngOnInit() {
    this.sitID = this.dataProvider.dataOne;
    if (!this.sitID) {
      this.modalController.dismiss();
      this.alertify.presentToast('Some error occurred please try again.')
    }
    this.databaseService.getSit(this.sitID).then((data) => {
      console.log(data.data())
      this.sitData = data.data()
    }).catch((err) => {console.error(err.message)});
    console.log('Sit Id received: ', this.sitID);
    this.databaseService.getSupervisor().then((data) => {
      this.supervisors = [];
      data.forEach((user) => {
        let data = user.data() as UserData;
        this.supervisors.push({
          name: data.displayName,
          id: data.userId,
          image: data.photoURL
        });
      });
    });
  }
  urltoFile(url, filename, mimeType) {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], filename, { type: mimeType });
      });
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    this.imageCodec = image.base64String;
    this.imageFormat = image.format;
    console.log(image.format);
    this.imageExists = true;
  }
  b64toBlob(b64Data, contentType: any, sliceSize: number) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  async verifyLicensePlate() {
    logEvent(this.analytics, 'verifyLicensePlate');
    this.dataProvider.pageSetting.blur = true;
    if (this.imageCodec) {
      try{
        let data = await this.databaseService
        .upload(
          'vehicleImages/' + this.sitID + 
            this.sitData.sit[0].vehicleNo +
            '/image.' +
            this.imageFormat,
          this.b64toBlob(this.imageCodec, 'image/' + this.imageFormat, 512)
        )
        this.numberPlateImageUrl = data;
        // this.dataProvider.pageSetting.blur = false;
        this.vehicleVerified = true;
        console.log(this.numberPlateImageUrl)
        this.alertify.presentToast(`Vehicle verified successfully`, 'info');
        return true;
      } catch(e) {
        this.vehicleVerified = false;
          this.alertify.presentToast(`Some error occurred`, 'error');
          return false
      }
    } else {
      return false;
    }
  }
  uploadData() {
    this.databaseService.recieveSit(this.sitID, {
        vehicleNumber: this.vehicleNumber.value || '',
        vehicleType: this.vehicleType.value || '',
        vehicleImage: this.numberPlateImageUrl || '',
        sitID: this.sitID,
        coordinatorId: this.dataProvider.userData?.userId,
        timestamp: new Date().toISOString(),
      })
      .then((data) => {
        // this.navCtrl.navigateBack('/main/app');
        this.alertify.presentToast(`Received successfully`, 'info');
        this.modalController.dismiss();
        window.history.back();
        this.router.navigate(['../home'])
        this.dataProvider.pageSetting.blur = false;
      })
      .catch((err) => {
        console.log(err);
        this.alertify.presentToast(`Error in receiving vehicle`, 'error');
      })
    // console.log("Uploaded Data",{
    //   vehicleNumber: this.vehicleNumber.value || '',
    //   vehicleType: this.vehicleType.value || '',
    //   vehicleImage: this.numberPlateImageUrl || '',
    //   sitID: this.sitID,
    //   coordinatorId: this.dataProvider.userData?.userId,
    //   timestamp: new Date().toISOString(),
    // })
  }
  async receivedSit(){
    if(this.receivedForm.valid && (await this.verifyLicensePlate())){
      this.dataProvider.pageSetting.blur = true;
      if(this.vehicleVerified){
        this.alertify.presentToast("Verified please wait uploading.","info",1000);
        this.uploadData()
      } else {
        this.alertify.presentToast("Please upload vehicle image.","error",2000);
        this.dataProvider.pageSetting.blur = false;
      }
    } else {
      this.alertify.presentToast(`Please fill all the required fields`,'error');
      this.dataProvider.pageSetting.blur = false;
    }
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}

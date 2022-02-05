import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-recieved',
  templateUrl: './recieved.page.html',
  styleUrls: ['./recieved.page.scss'],
})
export class RecievedPage implements OnInit, OnDestroy {
  recievedForm : FormGroup;
  vehicleNumber:FormControl = new FormControl('',[Validators.required]);
  gateNumber:FormControl = new FormControl('',[Validators.required]);
  imageExists:boolean = false;
  imageFile:File;
  imageCodec:any;
  recVehicleNumber:string="";
  recVehicleType:string="";
  sitID: string;
  recogniserSubscription: Subscription = Subscription.EMPTY;
  constructor(
    private http: HttpClient,
    private activatedRouteSnapshot:ActivatedRoute,
    private databaseService:DatabaseService,
    private dataProvider:DataProvider,
    private alertify:AlertsAndNotificationsService,
    private navCtrl: NavController,
    ) {
      this.activatedRouteSnapshot.queryParams.subscribe(params => {
        this.sitID = params.id;
      });
    this.recievedForm = new FormGroup({
      vehicleNumber: this.vehicleNumber,
      gateNumber: this.gateNumber
    });
  }
  ngOnInit() {
    this.sitID = this.dataProvider.dataOne;
    console.log("Sit Id recieved: ",this.sitID);
  }
  urltoFile(url, filename, mimeType){
    return (fetch(url)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], filename,{type:mimeType});})
    );
  }
  
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source:CameraSource.Camera,
    });
    this.imageCodec = image.base64String;
    this.imageExists = true;
  };
  verifyLicensePlate(){
    this.dataProvider.pageSetting.blur = true;
    this.recogniserSubscription=this.http.post(
      'https://us-central1-sit-manager.cloudfunctions.net/recognisePlate',
      // 'http://localhost:5001/sit-manager/us-central1/recognisePlate',
      {image:this.imageCodec,uid:this.dataProvider.userData.userId}).subscribe((data:any)=>{
      this.dataProvider.pageSetting.blur = false;
      console.log(data);
      this.recVehicleNumber = data.plate;
      this.recVehicleType = data.vehicle.type;
      this.alertify.presentToast(`Successful recognition of numberplate`,'info');
    },(error:any)=>{
      this.dataProvider.pageSetting.blur = false;
      console.log(error);
      // this.databaseService.addLog(error)
      this.alertify.presentToast(`Error in recognition of numberplate`,'error');
    })
  }
  ngOnDestroy(): void {
    this.recogniserSubscription.unsubscribe();
  }
  uploadData(){
    this.databaseService.recieveSit(this.sitID,{
      recVehicleNumber:this.recVehicleNumber,
      vehicleNumber:this.vehicleNumber.value,
      vehicleType:this.recVehicleType,
      gateNumber:this.gateNumber.value,
      vehicleImage:this.imageCodec,
      sitID:this.sitID,
      coordinatorId:this.dataProvider.userData.userId,
      timestamp:new Date().toISOString()
    }).then(data=>{
      this.navCtrl.navigateBack('/main/app'); 
      this.alertify.presentToast(`Successful recieved of vehicle`,'info');
    }).catch(err=>{
      console.log(err);
      this.alertify.presentToast(`Error in recieving vehicle`,'error');
    })
  }
  recievedSit(){
    if(this.recievedForm.valid){
      this.alertify.presentToast("Verified please wait uploading.","info",1000);
      if(this.recVehicleNumber){
        this.uploadData()
      } else {
        this.alertify.presentToast("Please verify the numberplate first.","error",2000);
      }
    } else {
      this.alertify.presentToast(`Please fill all the required fields`,'error');
    }
  }
}

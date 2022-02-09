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
  imageFormat:any;
  sitID: string;
  vehicleVerified:boolean = false;
  recogniserSubscription: Subscription = Subscription.EMPTY; 
  numberPlateImageUrl:string;
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
    this.imageFormat = image.format;
    console.log(image.format);
    this.imageExists = true;
  };
  b64toBlob(b64Data, contentType:any, sliceSize:number){
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
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }
  verifyLicensePlate(){
    this.dataProvider.pageSetting.blur = true;
    this.recogniserSubscription=this.http.post(
      'https://us-central1-sit-manager.cloudfunctions.net/recognisePlate',
      {image:this.imageCodec,uid:this.dataProvider.userData.userId}).subscribe((data:any)=>{
      console.log(data);
      this.recVehicleNumber = data.plate;
      this.recVehicleType = data.vehicle.type;
      if (this.vehicleNumber.value.toLowerCase() == this.recVehicleNumber.toLowerCase()){
        this.vehicleVerified = true;
        this.databaseService.upload('vehicleImages/'+this.recVehicleNumber+'/image.'+this.imageFormat,this.b64toBlob(this.imageCodec,'image/'+this.imageFormat,512)).then(data=>{
          this.numberPlateImageUrl = data;
          this.dataProvider.pageSetting.blur = false;
          this.alertify.presentToast(`Vehicle verified succefully`,'info');
        }).catch((error)=>{this.alertify.presentToast(`Some error occured`,'error');});
      } else {
        this.vehicleVerified = false;
        this.alertify.presentToast(`Wrong number plate. Alerted to admin.`,'info');
      }
    },(error:any)=>{
      this.dataProvider.pageSetting.blur = false;
      // console.log(error);
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
      vehicleImage:this.numberPlateImageUrl,
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

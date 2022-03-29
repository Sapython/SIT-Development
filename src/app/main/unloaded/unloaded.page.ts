import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Subscription } from 'rxjs';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { UserData } from 'src/app/structures/user.structure';
import { Analytics, logEvent,setCurrentScreen, setUserProperties, setUserId } from '@angular/fire/analytics';

@Component({
  selector: 'app-unloaded',
  templateUrl: './unloaded.page.html',
  styleUrls: ['./unloaded.page.scss'],
})
export class UnloadedPage implements OnInit {
  sitId: string;
  workersList: any[] = [];
  workersControls: any[] = [];
  workersTimeControls:any[] = [];
  quantityControls: any[] = [];
  labourChargeForm: FormGroup = new FormGroup({});
  quantityDetailForm: FormGroup = new FormGroup({});
  unloadedForm: FormGroup;
  vehicleNumber: FormControl = new FormControl('', [Validators.required]);
  gateNumber: FormControl = new FormControl('', [Validators.required]);
  // safeQuantity:FormControl = new FormControl('',[Validators.required]);
  // unsafeQuantity:FormControl = new FormControl('',[Validators.required]);
  workingWorkers: FormControl = new FormControl('', [Validators.required]);
  vehicleDamage: FormControl = new FormControl('', [Validators.required]);
  explainVehicleDamage: FormControl = new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(1000)]);
  personnelDamage: FormControl = new FormControl('', [Validators.required]);
  explainPersonnelDamage: FormControl = new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(1000)]);
  legalCharges: FormControl = new FormControl('', [Validators.required]);
  explainLegalCharges: FormControl = new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(1000)]);
  otherDamage: FormControl = new FormControl('');
  explainDamage: FormControl = new FormControl('');
  products: any[] = [];
  workers: UserData[] = [];
  imageFormat: any;
  imageExists: boolean = false;
  imageFile: File;
  imageCodec: any;
  vehicleVerified: boolean = false;
  recogniserSubscription: Subscription = Subscription.EMPTY;
  numberPlateImageUrl: string;
  recVehicleNumber: string = '';
  recVehicleType: string = '';
  sitData:any;
  recievedSitData:any;
  images:any = {};
  constructor(
    private http: HttpClient,
    private analytics:Analytics,
    private databaseService: DatabaseService,
    private alertify: AlertsAndNotificationsService,
    private dataProvider: DataProvider,
    private activatedRouteSnapshot: ActivatedRoute
  ) {
    this.unloadedForm = new FormGroup({
      workingWorkers: this.workingWorkers,
      vehicleDamage: this.vehicleDamage,
      explainVehicleDamage: this.explainVehicleDamage,
      personnelDamage: this.personnelDamage,
      explainPersonnelDamage: this.explainPersonnelDamage,
      legalCharges: this.legalCharges,
      explainLegalCharges: this.explainLegalCharges,
      otherDamage: this.otherDamage,
      explainDamage: this.explainDamage,
    });
    this.activatedRouteSnapshot.queryParams.subscribe((data: any) => {
      this.sitId = data.id;
    });
  }
  ngOnInit() {
    logEvent(this.analytics,'unloaded_page_viewed');
    this.databaseService.getWorkers().then((data: any) => {
      data.forEach((element: any) => {
        this.workers.push(element.data());
      });
    });
    this.databaseService.getRecievedSit(this.sitId).then((data: any) => {
      this.recievedSitData = data.data();
    })
    this.databaseService.getSit(this.sitId).then((data: any) => {
      this.products = [];
      this.quantityControls.forEach((control: any) => {
        this.quantityDetailForm.removeControl(control.id);
      });
      this.sitData = data.data();
      data.data().sit.forEach((sit: any) => {
        let control = this.quantityDetailForm.addControl(
          sit.productCode,
          new FormControl(0, [
            Validators.required,
            Validators.min(0),
            Validators.max(this.toNumber(sit.quantity)),
          ])
        );
        this.products.push(sit);
        this.quantityControls.push(control);
      });
    });
    console.log('Stock Id:', this.sitId);
  }
  genWorkerList(event: any) {
    this.workersList = [];
    this.workersControls.forEach((control: any) => {
      this.labourChargeForm.removeControl(control.id);
    });
    event.detail.value.forEach((element: any) => {
      // console.log(element);
      let control = this.labourChargeForm.addControl(
        element.id,
        new FormControl('', [Validators.required, Validators.min(0)])
      );
      let timeControl = this.labourChargeForm.addControl(
        element.id+'timeTaken',
        new FormControl('', [Validators.required, Validators.min(0)])
      );
      this.workersList.push(element);
      this.workersTimeControls.push(timeControl);
      this.workersControls.push(control);
    });
    // this.workersList = event.detail.value;
  }
  // async takePicture() {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: false,
  //     resultType: CameraResultType.Base64,
  //     source: CameraSource.Camera,
  //   });
  //   this.imageCodec = image.base64String;
  //   this.imageFormat = image.format;
  //   console.log(image.format);
  //   this.imageExists = true;
  // }
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
  async setImage(name,index){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
    });
    this.images[name+index.toString()] = image.base64String;
    // console.log(this.images);
  }
  // verifyLicensePlate(){
  //   this.dataProvider.pageSetting.blur = true;
  //   if(this.imageExists){
  //     this.recogniserSubscription=this.http.post(
  //       'https://us-central1-sit-manager.cloudfunctions.net/recognisePlate',
  //       {image:this.imageCodec,uid:this.dataProvider.userData?.userId}).subscribe((data:any)=>{
  //       this.recVehicleNumber = data.plate;
  //       this.recVehicleType = data.vehicle.type;
  //       if (this.vehicleNumber.value.toLowerCase() == this.recVehicleNumber.toLowerCase()){
  //         this.vehicleVerified = true;
  //         this.databaseService.upload('vehicleImages/'+this.recVehicleNumber+'/image.'+this.imageFormat,this.b64toBlob(this.imageCodec,'image/'+this.imageFormat,512)).then(data=>{
  //           this.numberPlateImageUrl = data;
  //           this.dataProvider.pageSetting.blur = false;
  //           this.alertify.presentToast(`Vehicle verified succefully`,'info');
  //         }).catch((error)=>{this.alertify.presentToast(`Some error occured`,'error');});
  //       } else {
  //         this.vehicleVerified = false;
  //         this.alertify.presentToast(`Wrong number plate. Alerted to admin.`,'info');
  //       }
  //     },(error:any)=>{
  //       this.dataProvider.pageSetting.blur = false;
  //       // console.log(error);
  //       // this.databaseService.addLog(error)
  //       this.alertify.presentToast(`Error in recognition of numberplate`,'error');
  //     })
  //   } else {
  //     this.alertify.presentToast(`Please take a picture of the number plate`,'error');
  //   }
  // }
  ngOnDestroy(): void {
    this.recogniserSubscription.unsubscribe();
  }
  async setAsUnloaded() {
    console.log(this.unloadedForm.valid,this.labourChargeForm.valid,this.quantityDetailForm.valid,this.workersList.length)
    if (
      this.unloadedForm.valid &&
      this.labourChargeForm.valid &&
      this.quantityDetailForm.valid &&
      this.workersList.length > 0
    ) {
      this.dataProvider.pageSetting.blur = true;
      let staleWorkersData = [];
      this.workingWorkers.value.forEach((element: any) => {
        element.value = this.labourChargeForm.value[element.id];
        element.timeTaken = this.labourChargeForm.value[element.id+'timeTaken'];
        logEvent(this.analytics,'chargeLabour',{charge:element.value,worker:element.id});
        staleWorkersData.push(element);
      });
      let productDamages = [];
      let count = 0;
      // this.products.forEach(async (element: any) => {
        
      // });
      for (const element of this.products) {
        element.damagedValue = this.quantityDetailForm.value[element.productCode];
        console.log('Data:', this.images[element.productCode + (count).toString()]);
        if (this.images[element.productCode + (count).toString()]) {
          element.damagedImage = await this.databaseService.upload(
            'damagedImages/' + element.productCode + count + '-' + (new Date()).getTime() + '.jpeg', 
            this.b64toBlob(this.images[element.productCode + (count).toString()], 'image/jpeg', 512)
          );
        }
        await Promise.all(element.damagedImage).then(data => {
          console.log("Ran await");
          productDamages.push(element);
          count++;
        })
        console.log("inline",productDamages);
      }
      console.log(productDamages);
      let data = {
        vehicleDamage: this.vehicleDamage.value,
        explainVehicleDamage: this.explainVehicleDamage,
        personnelDamage: this.personnelDamage.value,
        explainPersonnelDamage: this.explainPersonnelDamage,
        legalCharges: this.legalCharges.value,
        explainLegalCharges: this.explainLegalCharges,
        otherDamage: this.otherDamage.value,
        explainDamage: this.explainDamage.value,
        labourCharges: staleWorkersData,
        productDamages: productDamages,
      };
      // console.log(data);
      logEvent(this.analytics,'unloaded_SIT');
      this.databaseService.unloadSit(this.sitId,data).then((data:any) => {
        this.alertify.presentToast("Sit Unloaded");
        this.dataProvider.pageSetting.blur = false;
      })
    } else {
      this.dataProvider.pageSetting.blur = false;
      this.alertify.presentToast(
        'Please fill all the required fields',
        'error'
      );
    }
  }
  toNumber(val: string) {
    return Number(val);
  }
}

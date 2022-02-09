import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { UserData } from 'src/app/structures/user.structure';
@Component({
  selector: 'app-unloaded',
  templateUrl: './unloaded.page.html',
  styleUrls: ['./unloaded.page.scss'],
})
export class UnloadedPage implements OnInit {
  sitId:string;
  workersList:any[] = [];
  labourChargeForm:FormGroup = new FormGroup({});
  unloadedForm:FormGroup;
  vehicleNumber:FormControl = new FormControl('',[Validators.required]);
  gateNumber:FormControl = new FormControl('',[Validators.required]);
  // safeQuantity:FormControl = new FormControl('',[Validators.required]);
  // unsafeQuantity:FormControl = new FormControl('',[Validators.required]);
  workingWorkers:FormControl = new FormControl('',[Validators.required]);
  vehicleDamage:FormControl = new FormControl('',[Validators.required]);
  personelDamage:FormControl = new FormControl('',[Validators.required]);
  legalCharges:FormControl = new FormControl('',[Validators.required]);
  otherDamage:FormControl = new FormControl('');
  explainDamage:FormControl = new FormControl('');
  validImage:boolean = false;
  products:any[]=[];
  workers:UserData[] = [];
  constructor(
    private databaseService: DatabaseService,
    private alertify:AlertsAndNotificationsService,
    private dataProvider:DataProvider,
    private activatedRouteSnapshot:ActivatedRoute,
  ) {
    this.unloadedForm = new FormGroup({
      vehicleNumber:this.vehicleNumber,
      gateNumber:this.gateNumber,
      // safeQuantity:this.safeQuantity,
      // unsafeQuantity:this.unsafeQuantity,
      workingWorkers:this.workingWorkers,
      vehicleDamage:this.vehicleDamage,
      personelDamage:this.personelDamage,
      legalCharges:this.legalCharges,
      otherDamage:this.otherDamage,
      explainDamage:this.explainDamage,
    });
    this.activatedRouteSnapshot.queryParams.subscribe((data:any) => {
      this.sitId = data.id;
    })
   }
  ngOnInit() {
    this.databaseService.getWorkers().then((data:any) => {
      // console.log(data);
      data.forEach((element:any) => {
        // console.log(element.id,element.data());  
        this.workers.push(element.data());
      });
    });
    this.databaseService.getSit(this.sitId).then((data:any) => {
      this.products = data.data().sit;
    })
    console.log('Stock Id:',this.sitId);
  }
  genWorkerList(event:any){
    this.workersList = []
    this.labourChargeForm.clearValidators();
    event.detail.value.forEach((element:any) => {
      // console.log(element);
      this.labourChargeForm.addControl(element.id,new FormControl('',[Validators.required,Validators.min(1)]));
      this.workersList.push(element);
    });
    // this.workersList = event.detail.value;
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source:CameraSource.Camera,
    });
    var imageUrl = image.format;
    console.log(imageUrl);
  };
  setAsUnloaded(){
    if(this.unloadedForm.valid && this.validImage){
      this.dataProvider.pageSetting.blur = true;
      let data = {
        vehicleNumber:this.vehicleNumber.value,
        gateNumber:this.gateNumber.value,
        // safeQuantity:this.safeQuantity.value,
        // unsafeQuantity:this.unsafeQuantity.value,
        workingWorkers:this.workingWorkers.value,
        vehicleDamage:this.vehicleDamage.value,
        personelDamage:this.personelDamage.value,
        legalCharges:this.legalCharges.value,
        otherDamage:this.otherDamage.value,
        explainDamage:this.explainDamage.value,
      }
      this.databaseService.unloadSit(this.sitId,data).then((data:any) => {
        this.alertify.presentToast("Sit Unloaded");
        this.dataProvider.pageSetting.blur = false;
      })
    } else {
      this.dataProvider.pageSetting.blur = false;
      this.alertify.presentToast('Please fill all the required fields','error');
    }
  }
  toNumber(val:string){
    return Number(val);
  }

}

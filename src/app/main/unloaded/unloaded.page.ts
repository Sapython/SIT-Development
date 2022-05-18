import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Subscription } from 'rxjs';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { UserData } from 'src/app/structures/user.structure';
import {
  Analytics,
  logEvent,
  setCurrentScreen,
  setUserProperties,
  setUserId,
} from '@angular/fire/analytics';

@Component({
  selector: 'app-unloaded',
  templateUrl: './unloaded.page.html',
  styleUrls: ['./unloaded.page.scss'],
})
export class UnloadedPage implements OnInit {
  sitId: string;
  workersList: any[] = [];
  workersControls: any[] = [];
  workersTimeControls: any[] = [];
  quantityControls: any[] = [];
  superVisors: UserData[] = [];
  labourChargeForm: FormGroup = new FormGroup({});
  quantityDetailForm: FormGroup = new FormGroup({});
  unloadedForm: FormGroup;
  vehicleNumber: FormControl = new FormControl('', [Validators.required]);
  gateNumber: FormControl = new FormControl('', [Validators.required]);
  workingWorkers: FormControl = new FormControl('', [Validators.required]);
  vehicleDamage: FormControl = new FormControl('0', [
    Validators.required,
    Validators.min(0),
  ]);
  explainVehicleDamage: FormControl = new FormControl('', [
    Validators.minLength(10),
    Validators.maxLength(1000),
  ]);
  keptByVehicleDamage: FormControl = new FormControl('');
  personnelDamage: FormControl = new FormControl('0', [
    Validators.required,
    Validators.min(0),
  ]);
  explainPersonnelDamage: FormControl = new FormControl('', [
    Validators.minLength(10),
    Validators.maxLength(1000),
  ]);
  keptByPersonnelDamage: FormControl = new FormControl('');
  legalCharges: FormControl = new FormControl('0', [
    Validators.required,
    Validators.min(0),
  ]);
  explainLegalCharges: FormControl = new FormControl('', [
    Validators.minLength(10),
    Validators.maxLength(1000),
  ]);
  keptByLegalDamage: FormControl = new FormControl('');
  otherDamage: FormControl = new FormControl('0', [Validators.min(0)]);
  explainDamage: FormControl = new FormControl('');
  keptByOtherDamage: FormControl = new FormControl('');
  superVisorControl: FormControl = new FormControl('');
  products: any[] = [];
  workers: UserData[] = [];
  imageFormat: any;
  imageExists: boolean = false;
  imageFile: File;
  imageCodec: any;
  vehicleVerified: boolean = false;
  recognizerSubscription: Subscription = Subscription.EMPTY;
  numberPlateImageUrl: string;
  recVehicleNumber: string = '';
  recVehicleType: string = '';
  sitData: any;
  receivedSitData: any;
  images: any = {};
  constructor(
    private http: HttpClient,
    private analytics: Analytics,
    private databaseService: DatabaseService,
    private alertify: AlertsAndNotificationsService,
    private dataProvider: DataProvider,
    private router: Router,
    private activatedRouteSnapshot: ActivatedRoute
  ) {
    this.unloadedForm = new FormGroup({
      workingWorkers: this.workingWorkers,
      vehicleDamage: this.vehicleDamage,
      explainVehicleDamage: this.explainVehicleDamage,
      keptByVehicleDamage: this.keptByVehicleDamage,
      personnelDamage: this.personnelDamage,
      explainPersonnelDamage: this.explainPersonnelDamage,
      keptByPersonnelDamage: this.keptByPersonnelDamage,
      legalCharges: this.legalCharges,
      explainLegalCharges: this.explainLegalCharges,
      keptByLegalDamage: this.keptByLegalDamage,
      otherDamage: this.otherDamage,
      explainDamage: this.explainDamage,
      keptByOtherDamage: this.keptByOtherDamage,
      superVisorControl: this.superVisorControl,
    });
    this.activatedRouteSnapshot.queryParams.subscribe((data: any) => {
      this.sitId = data.id;
    });
  }
  ngOnInit() {
    logEvent(this.analytics, 'unloaded_page_viewed');
    this.databaseService.getWorkers().then((data: any) => {
      data.forEach((element: any) => {
        this.workers.push(element.data());
      });
    });
    this.databaseService.getReceivedSit(this.sitId).then((data: any) => {
      this.receivedSitData = data.data();
    });
    this.databaseService.getSupervisor().then((data: any) => {
      data.forEach((user: any) => {
        this.superVisors.push(user.data());
      });
    });
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
        element.id + 'timeTaken',
        new FormControl('', [Validators.required, Validators.min(0)])
      );
      this.workersList.push(element);
      this.workersTimeControls.push(timeControl);
      this.workersControls.push(control);
    });
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
  async setImage(name, index) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
    });
    this.images[name + index.toString()] = image.base64String;
  }
  ngOnDestroy(): void {
    this.recognizerSubscription.unsubscribe();
  }
  async setAsUnloaded() {
    console.log(this.unloadedForm.value);
    // console.log(this.unloadedForm.valid,this.labourChargeForm.valid,this.quantityDetailForm.valid,this.workersList.length)
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
        element.timeTaken =
          this.labourChargeForm.value[element.id + 'timeTaken'];
        logEvent(this.analytics, 'chargeLabour', {
          charge: element.value,
          worker: element.id,
        });
        staleWorkersData.push(element);
      });
      let productDamages = [];
      let count = 0;
      for (const product of this.products) {
        product.damagedValue = this.quantityDetailForm.value[product.productCode];
        console.log('----',this.quantityDetailForm.value,product.damagedValue)
        if (product.damagedValue > 0 && this.images[product.productCode + count.toString()]) {
          console.log(
            'Data:',
            this.images[product.productCode + count.toString()]
          );
          if (this.images[product.productCode + count.toString()]) {
            product.damagedImage = await this.databaseService.upload(
              'damagedImages/' +
                product.productCode +
                count +
                '-' +
                new Date().getTime() +
                '.jpeg',
              this.b64toBlob(
                this.images[product.productCode + count.toString()],
                'image/jpeg',
                512
              )
            );
          }
          await Promise.all(product.damagedImage).then((data) => {
            console.log('Ran await');
            productDamages.push(product);
            count++;
          });
          console.log('inline', productDamages);
        } else {
          product.damagedValue = 0;
          product.damagedImage = "";
          productDamages.push(product);
          count++;
        }
      }
      console.log(productDamages);
      this.unloadedForm.value.labourCharges = staleWorkersData;
      this.unloadedForm.value.productDamages = productDamages;
      console.log(this.sitId, this.unloadedForm.value);
      logEvent(this.analytics,'unloaded_SIT');
      this.databaseService.unloadSit(this.sitId,this.unloadedForm.value).then((data:any) => {
        this.alertify.presentToast("Sit Unloaded");
        this.dataProvider.pageSetting.blur = false;
        window.history.back();
      }).catch((err) => {
        this.alertify.presentToast("Some Error Occurred, please check fields or contact Shreeva.",'error',6000);
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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { SIT } from 'src/app/structures/method.structure';
import { SitdetailpopoverComponent } from './sitdetailpopover/sitdetailpopover.component';
import Fuse from 'fuse.js'
import { FiltersComponent, FilterSettings } from './filters/filters.component';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sit-overview',
  templateUrl: './sit-overview.page.html',
  styleUrls: ['./sit-overview.page.scss'],
})
export class SitOverviewPage implements OnInit, OnDestroy {
  tableView: boolean = false;
  searchEvent:any;
  items = [1, 2, 3];
  receivedCount: number = 0;
  unloadedCount: number = 0;
  pendingCount: number = 0;
  openPending: boolean = true;
  openUnloaded: boolean = true;
  openReceived: boolean = true;
  sitLedgers: SIT[] = [];
  searchTerm: string = '';
  filteredSitLedgers: any[] = [];
  filtersSettings:FilterSettings = {
    sortBy:'date',
    intensity:0.6,
    caseSensitive:false,
    matchCharLength:3,
    sort:true
  }
  options = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    // includeMatches: false,
    findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: true,
    keys: [
      'supplierName',
      'supplierCode',
      'status',
      'recievePlantName',
      'supplyPlantName',
      'transporterName',
      'vehicleNo',
      "deliveryCode"
    ],
  };
  fuse: any;
  sitSubscription:Subscription = Subscription.EMPTY;
  constructor(
    private databaseService: DatabaseService,
    public popoverController: PopoverController,
    public modalController: ModalController,
    private alertify:AlertsAndNotificationsService
  ) {}
  ngOnDestroy(): void {
    this.sitSubscription.unsubscribe();
  }
  ngOnInit() {
    this.sitSubscription = this.databaseService.getSitLedgers().subscribe((data: any) => {
      let sits = [];
      this.receivedCount = 0;
      this.unloadedCount = 0;
      this.pendingCount = 0;
      data.forEach((element: any) => {
        let filteredData = element.data();
        filteredData.id = element.id;
        sits.push(filteredData);
        if (filteredData.status == 'received') {
          this.receivedCount++;
        } else if (filteredData.status == 'unloaded') {
          this.unloadedCount++;
        } else if (filteredData.status == 'pending') {
          this.pendingCount++;
        }
      });
      this.sitLedgers = sits;
      this.fuse = new Fuse(this.sitLedgers, this.options);
    });
  }
  setView(event: any) {
    this.tableView = event.detail.checked;
  }
  async openButtonDialog(sit: SIT, event: any) {
    const popover = await this.popoverController.create({
      component: SitdetailpopoverComponent,
      translucent: true,
      componentProps:{
        status:sit.status,
        allData:sit,
      }
    });
    await popover.present();
  }
  getDate(date:any){
    return date.toDate();
  }
  // trim text to 15 characters
  trimText(text: string) {
    return text.substring(0, 15) + '...';
  }
  setSettings(){
    this.options['isCaseSensitive'] = this.filtersSettings.caseSensitive;
    this.options['minMatchCharLength'] = this.filtersSettings.matchCharLength;
    this.options['shouldSort'] = this.filtersSettings.sort;
    this.options['threshold'] = this.filtersSettings.intensity;
    this.fuse = new Fuse(this.sitLedgers, this.options);
    if (this.searchEvent){
      this.filterSit(this.searchEvent); 
    }
  }
  sortFunction(a:any,b:any):number{
    // console.log("A/B",a,b);
    // return 0 
    if (this.filtersSettings.sortBy == 'date'){
      console.log("Date");
      return b.uploadTime.toDate().getTime() - a.uploadTime.toDate().getTime();
    }
    else if (this.filtersSettings.sortBy == 'supplier'){
      console.log("Supplier");
      return a.supplierName.localeCompare(b.supplierName);
    }
    else if (this.filtersSettings.sortBy == 'status'){
      console.log("Status");
      const sortStack = ['pending','received','unloaded'];
      const aIndex = sortStack.indexOf(a.status);
      const bIndex = sortStack.indexOf(b.status);
      return aIndex - bIndex;
    }
    else if (this.filtersSettings.sortBy == 'plant'){
      return a.sit[0].supplyPlantName.localeCompare(b.sit[0].supplyPlantName);
    }
    else if (this.filtersSettings.sortBy == 'transporter'){
      return a.sit[0].transporterName.localeCompare(b.sit[0].transporterName);
    }
    else if (this.filtersSettings.sortBy == 'vehicleNo'){
      return a.sit[0].vehicleNo.localeCompare(b.sit[0].vehicleNo);
    }
    else if (this.filtersSettings.sortBy == 'delivery'){
      return a.sit[0].deliveryCode.localeCompare(b.sit[0].deliveryCode);
    }
    console.log("Default");
    return 1;
  }
  filterSit(event){
    this.searchEvent = event;
    this.searchTerm = event.detail.value;
    const res = this.fuse.search(event.detail.value);
    this.filteredSitLedgers = []
    res.forEach((element:any) => {
      this.filteredSitLedgers.push(element.item);
    });
    this.filteredSitLedgers.sort((a:SIT,b:SIT)=>{return this.sortFunction(a,b)});
    // this.filteredSitLedgers = res;
  }
  async openFilters(){
    const filtersModal = await this.modalController.create({
      component:FiltersComponent,
      componentProps:{
        filtersSettings:this.filtersSettings
      },
    })    
    await filtersModal.present();
    filtersModal.onDidDismiss().then((data:any)=>{
      console.log("Settings",data);
      if(data.data!=null && data.data!=undefined){
        this.filtersSettings = data.data;
        this.setSettings();
        this.alertify.presentToast("Filters set");
      } else {
        this.alertify.presentToast("Filters not set");
      }
    })
  }
}




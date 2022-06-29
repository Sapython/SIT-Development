import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { LabourLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-labour-ledger',
  templateUrl: './labour-ledger.page.html',
  styleUrls: ['./labour-ledger.page.scss'],
})
export class LabourLedgerPage implements OnInit {
  labourLedger: LabourLedger[] = []
  data:any = {};
  calculated:boolean = false;
  constructor(private databaseService:DatabaseService,private dataProvider:DataProvider,private alertify:AlertsAndNotificationsService) { }
  ngOnInit() {
    this.databaseService.getLabourLedger().then((labourLedger:any) => {
      this.labourLedger = [];
      labourLedger.forEach((element:any) => {
        this.labourLedger.push(element.data());
      });
    })
  }
  async calculate(){
    this.dataProvider.pageSetting.blur = true;
    await this.databaseService.getAllSit().then((ledger:any) => {
      this.labourLedger = [];
      var doneCounter = 0;
      var totalUnloaded = 0;
      ledger.forEach(async (ledgerData:any) => {
        // console.log(ledgerData.data().status)
        if(ledgerData.data().status==='unloaded'){
          totalUnloaded++;
          await this.databaseService.getUnloadedSit(ledgerData.id).then((unloaded:any) => {
            if(unloaded.data()){
              // console.log(unloaded.data().labourCharges)
              unloaded.data().labourCharges.forEach((labour:any) => {
                // console.log(labour)
                if (this.labourLedger.length>0){
                  let found:boolean = false;
                  this.labourLedger.forEach((labourData:any,index:number) => {
                    if(labourData.id===labour.id){
                      this.labourLedger[index].value+=labour.value;
                      this.labourLedger[index].timeTaken+=labour.timeTaken;
                      labour.supplierCode = ledgerData.data().supplierCode;
                      labour.supplierName = ledgerData.data().supplierName;
                      labour.sitId = ledgerData.id;
                      console.log(labourData)
                      this.labourLedger[index].workings.push(labour)
                      found = true;
                    }
                    // console.log(this.labourLedger,index)
                  })
                  if(!found){
                    this.labourLedger.push({
                      value: labour.value,
                      id: labour.id,
                      name: labour.name,
                      image: labour.image,
                      timeTaken: labour.timeTaken,
                      workings:[]
                    });
                  }
                } else {
                  this.labourLedger.push({
                    value: labour.value,
                    id: labour.id,
                    name: labour.name,
                    image: labour.image,
                    timeTaken: labour.timeTaken,
                    workings:[]
                  });
                }
              })
            }
          }).finally(()=>{
            doneCounter++;
            console.log(doneCounter,totalUnloaded,doneCounter===totalUnloaded)
            if(doneCounter===totalUnloaded){
              this.calculated = true;
              alert('Calculated')
              console.log(this.labourLedger)
              this.labourLedger.forEach((labourData:LabourLedger) => {
                this.databaseService.cacheLabourLedger(labourData).then(()=>{
                  this.alertify.presentToast('Labour Ledger Calculated');
                }).catch((error:any)=>{
                  this.alertify.presentToast(error.message,'error');
                }).finally(()=>{
                  this.dataProvider.pageSetting.blur = false;
                });
              })
            }
          })
        }
      });
    })
  }
  get getBanner():any{
    let date = this.labourLedger[0].lastCalculation.toDate()
    date.setHours(0,0,0)
    let todayDate = new Date()
    todayDate.setHours(0,0,0)
    // console.log(date,todayDate,date < todayDate)
    if (date < todayDate){
      return {
        date:this.labourLedger[0].lastCalculation.toDate()
      }
    } else {
      return {
        date:false
      }
    }
  }
}
export type LabourLedger={
  id:string,
  image:string,
  name:string,
  timeTaken:number,
  value:number,
  lastCalculation?:any,
  workings:LabourWork[]
}
export type LabourWork = {
  id:string;
  image:string;
  name:string;
  sitId:string;
  supplierCode:string;
  supplierName:string;
  timeTaken:number;
  value:number;
}
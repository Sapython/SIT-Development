import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { LabourLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-labour-ledger',
  templateUrl: './labour-ledger.page.html',
  styleUrls: ['./labour-ledger.page.scss'],
})
export class LabourLedgerPage implements OnInit {
  labourledger: any[] = []
  data:any = {};
  constructor(private databaseService:DatabaseService) { }
  ngOnInit() {
    this.databaseService.getAllSit().then((ledger:any) => {
      this.labourledger = [];
      ledger.forEach((ledgerData:any) => {
        // console.log(ledgerData.data())
        this.databaseService.getUnloadedSit(ledgerData.id).then((unloaded:any) => {
          if(unloaded.data()){
            unloaded.data().labourCharges.forEach((labour:any) => {
              if(this.labourledger.length>0){
                this.labourledger.forEach((ledgerData:any) => {
                  
                  if(ledgerData.id===labour.id){
                    console.log(labour.id, ledgerData.id, labour.id == ledgerData.id)
                    this.labourledger[this.labourledger.indexOf(ledgerData)].charge+=labour.charge;
                    // ledgerData.labourCharges.push(labour);
                  } else {
                    console.log(labour.id, ledgerData.id, labour.id == ledgerData.id)
                    this.labourledger.push({
                      charge: labour.value,
                      id: labour.id,
                      name: labour.name,
                      image: labour.image,
                    });
                  }
                })
              } else {
                this.labourledger.push({
                  charge: labour.value,
                  id: labour.id,
                  name: labour.name,
                  image: labour.image,
                });
              }
              // if(this.data[labour.id]){
              //   this.data[labour.id]={
              //     charge: labour.value+this.data[labour.id].charge,
              //     id: labour.id,
              //     name: labour.name,
              //     image: labour.image,
              //   };
              // } else {
              //   this.data[labour.id] = {
              //     charge: labour.value,
              //     id: labour.id,
              //     name: labour.name,
              //     image: labour.image,
              //   }
              // }
            })
          }
        })
      });
      // this.labourledger = Object.keys(this.data).map((key) => {
      //   return this.data[key];
      // });
      console.log(this.labourledger)
    })
  }
}

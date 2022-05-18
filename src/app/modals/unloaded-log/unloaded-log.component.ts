import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-unloaded-log',
  templateUrl: './unloaded-log.component.html',
  styleUrls: ['./unloaded-log.component.scss'],
})
export class UnloadedLogComponent implements OnInit {
  @Input() sitId: string;
  totalDamage: number = 0;
  goodsDamage:number = 0;
  mainSitData:any;
  constructor(private databaseService: DatabaseService) {}
  sitData: any;
  ngOnInit() {
    this.databaseService.getUnloadedSit(this.sitId).then((data: any) => {
      this.sitData = data.data();
      console.log(this.sitData);
      this.totalDamage =
        this.toNumber(this.sitData.legalCharges) +
        this.toNumber(this.sitData.otherDamage) +
        this.toNumber(this.sitData.personnelDamage) +
        this.toNumber(this.sitData.vehicleDamage);
      // console.log(this.sitData.damagedValue);
      this.sitData.productDamages.forEach((product) => {
        this.goodsDamage += this.toNumber(product.damagedValue);
      })
    });
    this.databaseService.getSit(this.sitId).then((data: any) => {
      this.mainSitData = data.data();
      console.log(this.mainSitData);
    })
  }
  splitName(fullName){
    return fullName.split(' ');
  }
  toNumber(input: string) {
    return Number(input);
  }
}

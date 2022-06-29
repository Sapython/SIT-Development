import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { UserData } from 'src/app/structures/user.structure';

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
  coordinator:UserData;
  constructor(private databaseService: DatabaseService) {}
  sitData: any;
  ngOnInit() {
    this.databaseService.getSit(this.sitId).then((data: any) => {
      this.mainSitData = data.data();
      console.log('mainSitData',this.mainSitData);
    }).catch((err) => {
      console.log(err);
    });
    this.databaseService.getUnloadedSit(this.sitId).then((data: any) => {
      this.sitData = data.data();
      this.databaseService.getUser(this.sitData.superVisorControl).then((coordinator:any) => {
        this.coordinator = coordinator.data();
        // console.log(coordinator.data())
      }).catch(err => {
        console.log(err)
      })
      // console.log(this.sitData);
      this.totalDamage =
        this.toNumber(this.sitData.legalCharges) +
        this.toNumber(this.sitData.otherDamage) +
        this.toNumber(this.sitData.personnelDamage) +
        this.toNumber(this.sitData.vehicleDamage);
      // console.log(this.sitData.damagedValue);
      this.sitData.productDamages.forEach((product) => {
        this.goodsDamage += this.toNumber(product.damagedValue);
      })
    }).catch((err) => {
      console.log(err);
    });
    console.log(this.sitData.superVisorControl)
  }
  splitName(fullName){
    return fullName.split(' ');
  }
  toNumber(input: string) {
    return Number(input);
  }
}

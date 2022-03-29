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
  constructor(private databaseService: DatabaseService) {}
  sitData: any;
  ngOnInit() {
    this.databaseService.getUnloadedSit(this.sitId).then((data: any) => {
      this.sitData = data.data();
      console.log(this.sitData);
      this.totalDamage =
        this.toNumber(this.sitData.legalCharges) +
        this.toNumber(this.sitData.otherDamage) +
        this.toNumber(this.sitData.personelDamage) +
        this.toNumber(this.sitData.vehicleDamage);
      // console.log(this.sitData.damagedValue);
      this.sitData.productDamages.forEach((product) => {
        this.totalDamage += this.toNumber(product.damagedValue);
      })
    });
  }
  splitName(fullName){
    return fullName.split(' ');
  }
  toNumber(input: string) {
    return Number(input);
  }
}

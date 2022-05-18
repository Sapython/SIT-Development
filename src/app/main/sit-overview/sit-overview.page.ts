import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { SIT, sitLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-sit-overview',
  templateUrl: './sit-overview.page.html',
  styleUrls: ['./sit-overview.page.scss'],
})
export class SitOverviewPage implements OnInit {
  items = [1,2,3]
  recievdCount:number = 0;
  unloadedCount:number = 0;
  pendingCount:number = 0;
  openPending:boolean = true;
  openUnloaded:boolean = true;
  openReceived:boolean = true;
  sitLedgers: SIT[] = [];
  constructor(private databaseService: DatabaseService) { }
  ngOnInit() {
    this.databaseService.getSitLedgers().subscribe((data:any)=>{
      let sits = [];
      this.recievdCount = 0;
      this.unloadedCount = 0;
      this.pendingCount = 0;
      data.forEach((element:any) => {
        let filteredData = element.data();
        filteredData.id = element.id;
        sits.push(filteredData);
        if (filteredData.status == 'received') {
          this.recievdCount++;
        } else if (filteredData.status == 'unloaded') {
          this.unloadedCount++;
        } else if (filteredData.status == 'pending') {
          this.pendingCount++;
        }
      });
      this.sitLedgers = sits;
    })
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { SIT, sitLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-pending-sit',
  templateUrl: './pending-sit.page.html',
  styleUrls: ['./pending-sit.page.scss'],
})
export class PendingSitPage implements OnInit, OnDestroy {
  items = [1, 2, 3];
  sitLedgers: SIT[] = [];
  sitsSubscription:Subscription = Subscription.EMPTY;
  constructor(private databaseService: DatabaseService) { }
  ngOnInit() {
    this.databaseService.getSitLedgers().subscribe((data:any)=>{
      let sits = [];
      data.forEach((element:any) => {
        let filteredData = element.data();
        filteredData.id = element.id;
        sits.push(filteredData);
      });
      this.sitLedgers = sits;
    })
  }
  ngOnDestroy(): void {
    this.sitsSubscription.unsubscribe();
  }
}

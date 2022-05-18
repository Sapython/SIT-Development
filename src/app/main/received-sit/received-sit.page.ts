import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { SIT, sitLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-received-sit',
  templateUrl: './received-sit.page.html',
  styleUrls: ['./received-sit.page.scss'],
})
export class ReceivedSitPage implements OnInit {
  items = [1, 2, 3];
  constructor(private databaseService: DatabaseService) { }
  sitLedgers: SIT[] = [];
  ngOnInit() {
    this.databaseService.getSitLedgers().subscribe((data:any)=>{
      let sits = [];
      data.forEach((element:any) => {
        let filteredData = element.data();
        filteredData.id = element.id;
        if (filteredData.status == 'received') {
          sits.push(filteredData);
        }
      });
      this.sitLedgers = sits;
    })
  }

}

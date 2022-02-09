import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { SIT, sitLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-recieved-sit',
  templateUrl: './recieved-sit.page.html',
  styleUrls: ['./recieved-sit.page.scss'],
})
export class RecievedSitPage implements OnInit {
  items = [1, 2, 3];
  constructor(private databaseService: DatabaseService) { }
  sitLedgers: SIT[] = [];
  ngOnInit() {
    this.databaseService.getSitLedgers().subscribe((data:any)=>{
      let sits = [];
      data.forEach((element:any) => {
        let filteredData = element.data();
        filteredData.id = element.id;
        if (filteredData.status == 'recieved') {
          sits.push(filteredData);
        }
      });
      this.sitLedgers = sits;
    })
  }

}

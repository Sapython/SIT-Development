import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { SIT } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-unloaded-sit',
  templateUrl: './unloaded-sit.page.html',
  styleUrls: ['./unloaded-sit.page.scss'],
})
export class UnloadedSitPage implements OnInit {
  sitLedgers: SIT[] = [];
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
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminDatabaseService } from 'src/app/services/admin-database.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
})
export class TrackingComponent implements OnInit {

  constructor(public modalController: ModalController,public db:AdminDatabaseService) { }

  ngOnInit() {}
  toggleVal(event:any){
    return event.detail.checked;
  }
} 

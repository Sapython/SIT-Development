import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminDatabaseService } from 'src/app/services/admin-database.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})
export class SecurityComponent implements OnInit {

  constructor(public modalController: ModalController,public db:AdminDatabaseService) { }

  ngOnInit() {}
  toggleVal(event:any){
    return event.detail.checked;
  }
  selectVal(event:any){
    return event.detail.value;
  }
}

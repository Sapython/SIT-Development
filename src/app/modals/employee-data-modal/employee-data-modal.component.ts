import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserData } from 'src/app/structures/user.structure';

@Component({
  selector: 'app-employee-data-modal',
  templateUrl: './employee-data-modal.component.html',
  styleUrls: ['./employee-data-modal.component.scss'],
})
export class EmployeeDataModalComponent implements OnInit {

  @Input() user:UserData;
  constructor(public modalController:ModalController) { }

  ngOnInit() {}

}

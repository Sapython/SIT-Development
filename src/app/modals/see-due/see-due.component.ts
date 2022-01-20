import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-see-due',
  templateUrl: './see-due.component.html',
  styleUrls: ['./see-due.component.scss'],
})
export class SeeDueComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  closeModal() {
    this.modalController.dismiss();
  }
  @Input() Due: number = 2324;
  @Input() WorkingIn: string = "tirupati SIT";
}

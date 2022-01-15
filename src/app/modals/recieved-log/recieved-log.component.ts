import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-recieved-log',
  templateUrl: './recieved-log.component.html',
  styleUrls: ['./recieved-log.component.scss'],
})
export class RecievedLogComponent implements OnInit {

  constructor(private modalController: ModalController) { }
  @Input() name: string = "TIRUPATI BAKERS";
  @Input() productName: string = "Biscuit";
  @Input() productCode: string = "123XYZ0";
  @Input() coordinator: string = "Ramlal Vishwakarma";
  @Input() coordinatorPhone: string = "9876543210";
  @Input() dispatchDate: string = "12/12/2019";
  @Input() expectedDelivery: string = "12/12/2019";
  @Input() Deliverycode: string = "123XYZ0";
  ngOnInit() {}
  closeModal() {
    this.modalController.dismiss();
  }
}

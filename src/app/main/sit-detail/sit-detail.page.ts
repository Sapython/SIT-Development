import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sit-detail',
  templateUrl: './sit-detail.page.html',
  styleUrls: ['./sit-detail.page.scss'],
})
export class SITDetailPage implements OnInit {
  @Input() Code:string = "ABC123E";
  @Input() Duedate:string = "25-12-2021";
  constructor() { }

  ngOnInit() {
  }

}

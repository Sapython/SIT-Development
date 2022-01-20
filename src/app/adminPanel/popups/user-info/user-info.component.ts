import { Component, Input, OnInit } from '@angular/core';
import { BasicUser } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() user:BasicUser| undefined;
  constructor() { }

  ngOnInit() {}
  removeUser(){}
  blockUser(){}
  resetUser(){}

}

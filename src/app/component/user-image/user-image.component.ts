import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProvider } from 'src/app/providers/data.provider';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss'],
})
export class UserImageComponent implements OnInit {
  constructor(public router:Router,public dataProvider:DataProvider) { }
  ngOnInit() {
    
  }
  navigateToAccount(){
    this.router.navigateByUrl('main/app/account-page')
  }
}

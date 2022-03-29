import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataProvider } from 'src/app/providers/data.provider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "";
  @Input() username: string = "Sajan Pandey";
  @Input() backModal:boolean = false;
  constructor(public dataProvider: DataProvider,private router:Router,public modalController:ModalController) { }
  navigateToAccount(){
    this.router.navigateByUrl('/main/app/account-page');
  }
  ngOnInit() {}
  navigate(path:string){
    this.router.navigateByUrl('/main/app/'+path);
  }
  back(){
    window.history.back();
  }
}

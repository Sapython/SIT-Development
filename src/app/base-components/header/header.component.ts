import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProvider } from 'src/app/providers/data.provider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "";
  @Input() username: string = "Sajan Pandey";
  constructor(public dataProvider: DataProvider,private router:Router) { }
  navigateToAccount(){
    this.router.navigateByUrl('/main/app/account-page');
  }
  ngOnInit() {}

}

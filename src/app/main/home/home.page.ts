import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  displayName:string="John Doe"
  constructor() { }

  ngOnInit() {
  }
  items = [1,2,3]
}

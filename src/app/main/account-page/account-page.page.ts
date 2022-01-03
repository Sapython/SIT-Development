import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.page.html',
  styleUrls: ['./account-page.page.scss'],
})
export class AccountPagePage implements OnInit {
  @Input() Email: string = "abcdef123@gmail.com";
  @Input() acess: string = "Admin";
  @Input() activesince: string = "14 Days";
  @Input() totaldispatched: string = "34 Packages";
  constructor() { }

  ngOnInit() {
  }

}

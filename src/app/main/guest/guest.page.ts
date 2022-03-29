import { Component, OnInit } from '@angular/core';
import { AuthencationService } from 'src/app/services/authencation.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {

  constructor(public authService:AuthencationService) { }

  ngOnInit() {
  }

}

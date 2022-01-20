import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  segmentChanged(event:any){
    if (event.detail.value=="dashboard"){
      this.router.navigate(['/admin/dashboard']);
    } else if (event.detail.value=="upload"){
      this.router.navigate(['/admin/upload-data']);
    } else if (event.detail.value=="options"){
      this.router.navigate(['/admin/configuration']);
    } else {
      this.router.navigate(['/admin/dashboard']);
    }
  }
}

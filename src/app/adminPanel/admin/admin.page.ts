import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Analytics, logEvent,setCurrentScreen, setUserProperties, setUserId } from '@angular/fire/analytics';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private analytics:Analytics,private router: Router) { }

  ngOnInit() {
  }
  segmentChanged(event:any){
    if (event.detail.value=="dashboard"){
      logEvent(this.analytics,'navigateToAdminDashboard');
      this.router.navigate(['/admin/dashboard']);
    } else if (event.detail.value=="upload"){
      logEvent(this.analytics,'navigateToAdminUpload');
      this.router.navigate(['/admin/upload-data']);
    } else if (event.detail.value=="options"){
      logEvent(this.analytics,'navigateToAdminOptions');
      this.router.navigate(['/admin/configuration']);
    } else {
      this.router.navigate(['/admin/dashboard']);
    }
  }
}

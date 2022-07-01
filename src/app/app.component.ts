import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthencationService } from './services/authencation.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { Router } from '@angular/router';
import { DataProvider } from './providers/data.provider';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { DatabaseService } from './services/database.service';
import { App } from '@capacitor/app';
import { AlertsAndNotificationsService } from './services/uiService/alerts-and-notifications.service';
var backCount = 0;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  backEmitterSub: any;
  quickBacks: string[] = [
    '/admin/configuration',
    '/admin/upload-data',
    '/admin/dashboard',
  ];
  constructor(
    private analytics: Analytics,
    private alertify: AlertsAndNotificationsService,
    public databaseService: DatabaseService,
    public authService: AuthencationService,
    private router: Router,
    public dataProvider: DataProvider,
    private platform: Platform
  ) {
    this.backEmitterSub = this.platform.backButton.subscribeWithPriority(
      10,
      () => {
        if (this.quickBacks.includes(window.location.pathname)) {
          this.router.navigate(['/main/app/home']);
        } else if (window.location.pathname == '/main/app/home') {
          if (backCount == 0) {
            this.alertify.presentToast(
              'Press back again to exit',
              'info',
              2000
            );
            backCount++;
          } else if (backCount >= 1) {
            App.exitApp();
          }
        } else {
          window.history.back();
        }
        // alert(window.history);
        // alert('Pressed back '+window.location)
      }
    );
    if (!platform.is('hybrid')) {
      GoogleAuth.initialize({
        clientId:
          '690627613189-fglnifb9ggsg8qgrb1s17otedqhfm08h.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
    }
  }
  useIncompatible: boolean = false;
  openShreeva() {
    window.open('https://shreeva.com/', '_blank');
  }
  nonUser = ['user', 'guest'];
  ngOnDestroy(): void {
    this.backEmitterSub.unsubscribe();
  }
  async ngOnInit() {
    setInterval(() => {
      backCount = 0;
    }, 5000);
    this.authService.user.subscribe((user) => {
      if (user) {
        this.databaseService.getUser(user.uid).then((user) => {
          if (this.nonUser.includes(user.data().access.access)) {
            SplashScreen.hide();
            this.router.navigate(['/main/guest']);
          } else {
            SplashScreen.hide();
            this.router.navigate(['/main/app/home']);
          }
        });
        // this.router.navigate(['/admin']);
      } else {
        SplashScreen.hide();
        this.router.navigate(['/login']);
      }
    });
  }
  navigate(path: string) {
    logEvent(this.analytics, 'navigateTo' + path, { path: path });
    this.router.navigateByUrl('/main/app/' + path);
  }
  navigateToAdmin(path: string) {
    logEvent(this.analytics, 'navigateToAdmin', { path: path });
    this.router.navigateByUrl('/main/admin/' + path);
  }
  logOut() {
    if (confirm('Are you sure you want to logout?')) {
      logEvent(this.analytics, 'logOut');
      this.authService.logout();
    }
  }
}

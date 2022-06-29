import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataProvider } from '../providers/data.provider';
import { AuthencationService } from '../services/authencation.service';
import { AlertsAndNotificationsService } from '../services/uiService/alerts-and-notifications.service';
import { Storage } from '@capacitor/storage';
var allowedAccess=['supervisor','worker','admin'];
@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(
    public authService:AuthencationService,
    public alertify:AlertsAndNotificationsService,
    private dataProvider:DataProvider,
    private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.dataProvider.loggedIn){
        if(allowedAccess.includes(this.dataProvider.userData.access.access)){
          return false;
        } else {
          return true
        }
      } else {
        return true;
      }
  }

}

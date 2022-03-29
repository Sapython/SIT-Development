import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataProvider } from './providers/data.provider';

@Injectable({
  providedIn: 'root'
})
export class SuperVisorGuard implements CanActivate {
  constructor(private dataProvider:DataProvider){}
  NON_ADMINS = ['user','guest','worker'];
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.NON_ADMINS.includes(this.dataProvider.userData.access.access)){
      return false;
    } else {
      return true;
    }
  }
  
}

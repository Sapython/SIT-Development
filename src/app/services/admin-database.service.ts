import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collectionData,
  DocumentReference,
  collectionSnapshots,
  CollectionReference,
  collection,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  docSnapshots,
  docData,
  getDoc,
  getDocs,
  where,
} from '@angular/fire/firestore';
import { query } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { DataProvider } from '../providers/data.provider';
import { ContactRequest } from '../structures/user.structure';
import { AuthencationService } from './authencation.service';
import { AlertsAndNotificationsService } from './uiService/alerts-and-notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AdminDatabaseService {

  constructor(private fs: Firestore, private dataProvider: DataProvider,private authService:AuthencationService,private alertify:AlertsAndNotificationsService) { }
  // Secuirty functions starts
  checkAdmin(){
    return this.dataProvider.userData.access.access == 'admin';
  }
  // Secuirty functions ends
  // Notification functions starts
  confirmChange(){
    this.alertify.presentToast('Data saved','info',1500);
  }
  // Notification functions ends
  // Admin data functions starts
    getSettings(){
      this.confirmChange();
      return getDoc(doc(this.fs, 'adminData/settings'));
    }
    persistantData(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{persistantData:value},{merge:true});
    }
    enableNewAccounts(value:boolean) {
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{enableNewAccounts:value},{merge:true});
    }
    enableGuestAccess(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{enableGuestAccess:value},{merge:true});
    }
    summaryCardType(value:'weekly'|'monthly'|'yearly'){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{summaryCardType:value},{merge:true});
    }
    // Tracking settings starts
    vehicleTracking(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{vehicleTracking:value},{merge:true});
    }
    employeeTracking(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{employeeTracking:value},{merge:true});
    }
    formTracking(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{formTracking:value},{merge:true});
    }
    attendanceTracking(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{attendanceTracking:value},{merge:true});
    }
    appUsageTracking(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{appUsageTracking:value},{merge:true});
    }
    // Tracking settings ends
    // Secuirty settings starts
    canAdminsChangeUsers(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{allowAdminsToChangeUsers:value},{merge:true});
    }
    canSupervisorManageUsers(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{allowSupervisorToManageUsers:value},{merge:true});
    }
    canGuestSeeData(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{allowGuestToSeeData:value},{merge:true});
    }
    defaultAccessLevel(value:'guest'|'employee'|'supervisor'|'admin'){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{defaultAccessLevel:value},{merge:true});
    }
    allowSignout(value:boolean){
      this.confirmChange();
      return setDoc(doc(this.fs, 'adminData/settings'),{allowSignout:value},{merge:true});
    }
    // Secuirty settings ends
    // Manage Users starts
    getUsers(){
      return getDocs(collection(this.fs, 'users'));
    }
    userAction(value:'remove'|'block'|'reset'|'none',userId:string){
      if (value==='remove'){
        this.confirmChange();
        return deleteDoc(doc(this.fs, 'users/'+userId));
      } else if (value==='block'){
        this.confirmChange();
        return setDoc(doc(this.fs, 'users/'+userId),{blocked:true},{merge:true});
      } else if (value==='reset'){
        this.confirmChange();
        return setDoc(doc(this.fs, 'users/'+userId),{},{merge:true});
      } else {
        return;
      }
    }
    // Manage Users ends
  // Admin data functions ends
}

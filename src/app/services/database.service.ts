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
} from '@angular/fire/firestore';
import { DataProvider } from '../providers/data.provider';
import { ContactRequest } from '../structures/user.structure';
import { AuthencationService } from './authencation.service';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  contactDoc: CollectionReference;
  constructor(private fs: Firestore, private dataProvider: DataProvider,private authService:AuthencationService) {
    this.contactDoc = collection(this.fs, 'contactRequests');
  }
  addContactRequest(
    name: string,
    email: string,
    phoneNumber: string,
    message: string
  ) {
    let data: ContactRequest = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
      date: new Date(),
    };
    addDoc(this.contactDoc, data).then((doc) => {
      console.log(doc);
      console.log(doc.id);
    });
  }
  logBug(description) {
    let date = new Date().toDateString();
    let data = {
      date: date || '',
      message: description || '',
      url: window.location.href || '',
      clientInfo: window.navigator.userAgent || '',
      user: this.dataProvider.userData || '',
      logs: this.dataProvider.logs || '',
      screenWidth: screen.width || '',
      screenHeight: screen.height || '',
      windowWidth: window.innerWidth || '',
      windowHeight: window.innerHeight || '',
      availWidth: screen.availWidth || '',
      availHeight: screen.availHeight || '',
      colorDepth: screen.colorDepth || '',
      pixelDepth: screen.pixelDepth || '',
      referrer: document.referrer || '',
      historyLength: history.length || '',
      title: document.title || '',
      browserName: window.navigator.userAgent || '',
      userLanguage: navigator.language || '',
      userAgent: navigator.userAgent || '',
      cookieEnabled: navigator.cookieEnabled || '',
      onLine: navigator.onLine || '',
      hardwareConcurrency: navigator.hardwareConcurrency || '',
      maxTouchPoints: navigator.maxTouchPoints || '',
      doNotTrack: navigator.doNotTrack || '',
      solved: false,
    };
    return addDoc(collection(this.fs, 'logs'), data);
  }
  
  // SIt services starts
  getSitLedgers() {
    return collectionSnapshots(collection(this.fs, 'SIT_COL'));
  }
  // SIT services ends
}

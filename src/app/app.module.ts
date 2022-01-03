import { DataProvider } from './providers/data.provider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { HeaderComponent } from './base-components/header/header.component';
import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { AlertsAndNotificationsService } from './services/uiService/alerts-and-notifications.service';
import { DatabaseService } from './services/database.service';
import { UserDataService } from './services/user-data.service';
import { AuthencationService } from './services/authencation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AlphaPipe } from './alpha.pipe';

@NgModule({
    declarations: [AppComponent, LoginComponent, SignupComponent, VerifyemailComponent, AlphaPipe],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAnalytics(() => getAnalytics()),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideFunctions(() => getFunctions()),
        provideMessaging(() => getMessaging()),
        provideStorage(() => getStorage()),
     ],
    providers: [
        AlertsAndNotificationsService,
        AuthencationService,
        DataProvider,
        DatabaseService,
        UserDataService,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        ScreenTrackingService,
        UserTrackingService,
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

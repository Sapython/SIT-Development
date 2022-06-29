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
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, enableIndexedDbPersistence } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
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
import { LoggedInGuard } from './guards/loggedIn.guard';
import { ComponentModule } from './component/component.module';
import { BackDirective } from './directives/back.directive';
import { BaseComponentsModule } from './base-components/base-components.module';
import { AnalyticsService } from './services/analytics.service';
import { connectFunctionsEmulator } from 'firebase/functions';
import { connectFirestoreEmulator } from 'firebase/firestore';
@NgModule({
    declarations: [AppComponent, LoginComponent, SignupComponent, VerifyemailComponent, BackDirective],
    imports: [
        // MainModule,
        ComponentModule,
        BaseComponentsModule,
        ComponentModule,
        ReactiveFormsModule,
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAnalytics(() => getAnalytics()),
        provideAuth(() => {
            const auth = getAuth();
            // connectAuthEmulator(auth,'http://localhost:9099');
            return auth;
        }),
        provideFirestore(() => {
            const firestore = getFirestore();
            // connectFirestoreEmulator(firestore,'localhost',8080);
            enableIndexedDbPersistence(firestore);
            return firestore;
        }),
        provideFunctions(() => {
            const functions = getFunctions();
            // connectFunctionsEmulator(functions,'localhost',5001);
            return functions;
        }),
        provideMessaging(() => getMessaging()),
        provideStorage(() => {
            const storage = getStorage();
            // connectStorageEmulator(storage,'localhost',9199);
            return storage;
        }),
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
        LoggedInGuard,
        AnalyticsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

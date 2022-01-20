import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationPageRoutingModule } from './configuration-routing.module';

import { ConfigurationPage } from './configuration.page';
import { TrackingComponent } from '../../models/tracking/tracking.component';
import { SecurityComponent } from '../../models/security/security.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationPageRoutingModule
  ],
  declarations: [ConfigurationPage,TrackingComponent,SecurityComponent]
})
export class ConfigurationPageModule {}

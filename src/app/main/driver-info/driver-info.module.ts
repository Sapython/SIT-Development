import { BaseComponentsModule } from './../../base-components/base-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverInfoPageRoutingModule } from './driver-info-routing.module';

import { DriverInfoPage } from './driver-info.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverInfoPageRoutingModule,
    BaseComponentsModule,
    WidgetsModule
  ],
  declarations: [DriverInfoPage]
})
export class DriverInfoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverListPageRoutingModule } from './driver-list-routing.module';

import { DriverListPage } from './driver-list.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverListPageRoutingModule,
    BaseComponentsModule,
    WidgetsModule
  ],
  declarations: [DriverListPage]
})
export class DriverListPageModule {}

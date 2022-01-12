import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SITDetailPageRoutingModule } from './sit-detail-routing.module';

import { SITDetailPage } from './sit-detail.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SITDetailPageRoutingModule,
    BaseComponentsModule
  ],
  declarations: [SITDetailPage]
})
export class SITDetailPageModule {}

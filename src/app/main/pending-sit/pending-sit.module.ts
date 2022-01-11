import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingSitPageRoutingModule } from './pending-sit-routing.module';

import { PendingSitPage } from './pending-sit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingSitPageRoutingModule
  ],
  declarations: [PendingSitPage]
})
export class PendingSitPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingSitPageRoutingModule } from './pending-sit-routing.module';

import { PendingSitPage } from './pending-sit.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingSitPageRoutingModule,
    BaseComponentsModule,
    WidgetsModule
  ],
  declarations: [PendingSitPage]
})
export class PendingSitPageModule {}

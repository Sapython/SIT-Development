import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivedSitPageRoutingModule } from './received-sit-routing.module';

import { ReceivedSitPage } from './received-sit.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivedSitPageRoutingModule,
    BaseComponentsModule,
    WidgetsModule
  ],
  declarations: [ReceivedSitPage]
})
export class ReceivedSitPageModule {}

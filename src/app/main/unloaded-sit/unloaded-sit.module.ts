import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnloadedSitPageRoutingModule } from './unloaded-sit-routing.module';

import { UnloadedSitPage } from './unloaded-sit.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseComponentsModule,
    WidgetsModule,
    UnloadedSitPageRoutingModule
  ],
  declarations: [UnloadedSitPage]
})
export class UnloadedSitPageModule {}

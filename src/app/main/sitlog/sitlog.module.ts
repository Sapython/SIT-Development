import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SITlogPageRoutingModule } from './sitlog-routing.module';

import { SITlogPage } from './sitlog.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SITlogPageRoutingModule,
    WidgetsModule,
    BaseComponentsModule
  ],
  declarations: [SITlogPage]
})
export class SITlogPageModule {}

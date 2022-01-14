import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitOverviewPageRoutingModule } from './sit-overview-routing.module';

import { SitOverviewPage } from './sit-overview.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitOverviewPageRoutingModule,
    WidgetsModule,
    BaseComponentsModule
  ],
  declarations: [SitOverviewPage]
})
export class SitOverviewPageModule {}

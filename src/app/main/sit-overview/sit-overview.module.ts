import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitOverviewPageRoutingModule } from './sit-overview-routing.module';

import {  SitOverviewPage } from './sit-overview.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { SitdetailpopoverComponent } from './sitdetailpopover/sitdetailpopover.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SitOverviewPageRoutingModule,
    WidgetsModule,
    BaseComponentsModule
  ],
  declarations: [SitOverviewPage,SitdetailpopoverComponent,FiltersComponent]
})
export class SitOverviewPageModule {}

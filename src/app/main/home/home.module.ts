import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { ComponentModule } from 'src/app/component/component.module';
import { NgChartsModule } from 'ng2-charts';
import { BugReportComponent } from 'src/app/modals/bug-report/bug-report.component';
@NgModule({
  imports: [
    NgChartsModule,
    BaseComponentsModule,
    ComponentModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    WidgetsModule
  ],
  declarations: [HomePage,BugReportComponent]
})
export class HomePageModule {}

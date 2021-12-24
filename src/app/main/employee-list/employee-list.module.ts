import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeListPageRoutingModule } from './employee-list-routing.module';

import { EmployeeListPage } from './employee-list.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    BaseComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeListPageRoutingModule
  ],
  declarations: [EmployeeListPage]
})
export class EmployeeListPageModule {}

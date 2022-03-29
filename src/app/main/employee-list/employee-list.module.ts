import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeListPageRoutingModule } from './employee-list-routing.module';

import { EmployeeListPage } from './employee-list.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { EmployeeDataModalComponent } from 'src/app/modals/employee-data-modal/employee-data-modal.component';

@NgModule({
  imports: [
    BaseComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeListPageRoutingModule,
    WidgetsModule,
    BaseComponentsModule
  ],
  declarations: [EmployeeListPage,EmployeeDataModalComponent]
})
export class EmployeeListPageModule {}

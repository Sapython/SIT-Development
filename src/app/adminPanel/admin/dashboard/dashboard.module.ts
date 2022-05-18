import { UserInfoComponent } from './../../popups/user-info/user-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { ComponentModule } from 'src/app/component/component.module';
import { ManageUserComponent } from '../../models/manage-user/manage-user.component';
import { AddUserModalComponent } from '../../models/add-user-modal/add-user-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    DashboardPageRoutingModule,
    BaseComponentsModule,
    ComponentModule,
  ],
  declarations: [DashboardPage,ManageUserComponent,UserInfoComponent,AddUserModalComponent]
})
export class DashboardPageModule {}

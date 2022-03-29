import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPagePageRoutingModule } from './account-page-routing.module';

import { AccountPagePage } from './account-page.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPagePageRoutingModule,
    BaseComponentsModule
  ],
  declarations: [AccountPagePage]
})
export class AccountPagePageModule {}

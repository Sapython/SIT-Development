import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseledgerPageRoutingModule } from './expenseledger-routing.module';

import { ExpenseledgerPage } from './expenseledger.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseledgerPageRoutingModule,
    WidgetsModule,
    BaseComponentsModule
  ],
  declarations: [ExpenseledgerPage]
})
export class ExpenseledgerPageModule {}

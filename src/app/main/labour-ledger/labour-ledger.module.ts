import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabourLedgerPageRoutingModule } from './labour-ledger-routing.module';

import { LabourLedgerPage } from './labour-ledger.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabourLedgerPageRoutingModule,
    WidgetsModule,
    BaseComponentsModule
  ],
  declarations: [LabourLedgerPage]
})
export class LabourLedgerPageModule {}

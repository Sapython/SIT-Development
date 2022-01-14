import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DalaLedgerPageRoutingModule } from './dala-ledger-routing.module';

import { DalaLedgerPage } from './dala-ledger.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DalaLedgerPageRoutingModule,
    WidgetsModule,
    BaseComponentsModule
  ],
  declarations: [DalaLedgerPage]
})
export class DalaLedgerPageModule {}

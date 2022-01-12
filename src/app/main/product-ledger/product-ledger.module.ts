import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductLedgerPageRoutingModule } from './product-ledger-routing.module';

import { ProductLedgerPage } from './product-ledger.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductLedgerPageRoutingModule,
    WidgetsModule,
    BaseComponentsModule
  ],
  declarations: [ProductLedgerPage]
})
export class ProductLedgerPageModule {}

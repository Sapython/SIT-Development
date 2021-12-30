import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductLedgerPageRoutingModule } from './product-ledger-routing.module';

import { ProductLedgerPage } from './product-ledger.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductLedgerPageRoutingModule,
    WidgetsModule
  ],
  declarations: [ProductLedgerPage]
})
export class ProductLedgerPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductLedgerPage } from './product-ledger.page';

const routes: Routes = [
  {
    path: '',
    component: ProductLedgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductLedgerPageRoutingModule {}

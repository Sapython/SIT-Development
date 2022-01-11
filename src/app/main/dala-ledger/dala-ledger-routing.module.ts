import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DalaLedgerPage } from './dala-ledger.page';

const routes: Routes = [
  {
    path: '',
    component: DalaLedgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DalaLedgerPageRoutingModule {}

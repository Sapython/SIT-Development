import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabourLedgerPage } from './labour-ledger.page';

const routes: Routes = [
  {
    path: '',
    component: LabourLedgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabourLedgerPageRoutingModule {}

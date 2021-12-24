import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LedgeroverviewPage } from './ledgeroverview.page';

const routes: Routes = [
  {
    path: '',
    component: LedgeroverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedgeroverviewPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseledgerPage } from './expenseledger.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseledgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseledgerPageRoutingModule {}

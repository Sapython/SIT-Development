import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SITlogPage } from './sitlog.page';

const routes: Routes = [
  {
    path: '',
    component: SITlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SITlogPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SITDetailPage } from './sit-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SITDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SITDetailPageRoutingModule {}

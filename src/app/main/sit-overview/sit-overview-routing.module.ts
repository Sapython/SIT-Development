import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitOverviewPage } from './sit-overview.page';

const routes: Routes = [
  {
    path: '',
    component: SitOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitOverviewPageRoutingModule {}

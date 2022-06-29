import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitdetailPage } from './sitdetail.page';

const routes: Routes = [
  {
    path: '',
    component: SitdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitdetailPageRoutingModule {}

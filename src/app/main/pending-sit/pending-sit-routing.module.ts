import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingSitPage } from './pending-sit.page';

const routes: Routes = [
  {
    path: '',
    component: PendingSitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingSitPageRoutingModule {}

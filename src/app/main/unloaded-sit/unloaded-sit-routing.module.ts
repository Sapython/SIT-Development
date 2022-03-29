import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnloadedSitPage } from './unloaded-sit.page';

const routes: Routes = [
  {
    path: '',
    component: UnloadedSitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnloadedSitPageRoutingModule {}

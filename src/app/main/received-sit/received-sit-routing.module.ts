import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivedSitPage } from './received-sit.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivedSitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivedSitPageRoutingModule {}

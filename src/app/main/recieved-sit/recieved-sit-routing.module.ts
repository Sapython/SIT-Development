import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecievedSitPage } from './recieved-sit.page';

const routes: Routes = [
  {
    path: '',
    component: RecievedSitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecievedSitPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecievedPage } from './recieved.page';

const routes: Routes = [
  {
    path: '',
    component: RecievedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecievedPageRoutingModule {}

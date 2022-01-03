import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnloadedPage } from './unloaded.page';

const routes: Routes = [
  {
    path: '',
    component: UnloadedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnloadedPageRoutingModule {}

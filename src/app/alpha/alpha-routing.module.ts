import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphaPage } from './alpha.page';

const routes: Routes = [
  {
    path: '',
    component: AlphaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlphaPageRoutingModule {}

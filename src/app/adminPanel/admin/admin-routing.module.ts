import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children:[
      {
        path: 'dashboard',
        loadChildren: () => import('../admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'configuration',
        loadChildren: () => import('../admin/configuration/configuration.module').then( m => m.ConfigurationPageModule)
      },
      {
        path: 'upload-data',
        loadChildren: () => import('../admin/upload-data/upload-data.module').then( m => m.UploadDataPageModule)
      },
      {
        path: '',
        redirectTo: 'configuration',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}

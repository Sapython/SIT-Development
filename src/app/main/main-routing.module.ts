import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'employeeList',
        loadChildren: () => import('./employee-list/employee-list.module').then( m => m.EmployeeListPageModule)
      },
      {
        path: 'ledgerOverview',
        loadChildren: () => import('./ledgeroverview/ledgeroverview.module').then( m => m.LedgeroverviewPageModule)
      },
    ],
  },
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

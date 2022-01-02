
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
      {
        path: 'sitdetail',
        loadChildren: () => import('./sit-detail/sit-detail.module').then( m => m.SITDetailPageModule)
      },
      {
        path: 'recieved',
        loadChildren: () => import('./recieved/recieved.module').then ( m => m.RecievedPageModule)
      },
      {
        path: 'product-ledger',
        loadChildren: () => import('./product-ledger/product-ledger.module').then( m => m.ProductLedgerPageModule)
      },
      {
        path: 'labour-ledger',
        loadChildren: () => import('./labour-ledger/labour-ledger.module').then( m => m.LabourLedgerPageModule)
      },
      {
        path: 'employee-info',
        loadChildren: () => import('./employee-info/employee-info.module').then( m => m.EmployeeInfoPageModule)
      },
      {
        path: 'sitlog',
        loadChildren: () => import('./sitlog/sitlog.module').then( m => m.SITlogPageModule)
      }
    ],
  },
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full',
  },
  {
    path: 'sit-detail',
    loadChildren: () => import('./sit-detail/sit-detail.module').then( m => m.SITDetailPageModule)
  },
  {
    path: 'recieved',
    loadChildren: () => import('./recieved/recieved.module').then( m => m.RecievedPageModule)
  },
  {
    path: 'product-ledger',
    loadChildren: () => import('./product-ledger/product-ledger.module').then( m => m.ProductLedgerPageModule)
  },
  {
    path: 'labour-ledger',
    loadChildren: () => import('./labour-ledger/labour-ledger.module').then( m => m.LabourLedgerPageModule)
  },
  {
    path: 'employee-info',
    loadChildren: () => import('./employee-info/employee-info.module').then( m => m.EmployeeInfoPageModule)
  },
  {
    path: 'sitlog',
    loadChildren: () => import('./sitlog/sitlog.module').then( m => m.SITlogPageModule)
  },






];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

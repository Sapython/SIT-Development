
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'app',
    component: MainComponent,
    children: [
      { 
        path:'home',
        children:[ 
          {
            path: '',
            loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
          },
        ]
      },
      {
        path: 'employeeList',
        children:[
          {
            path: '',
            loadChildren: () => import('./employee-list/employee-list.module').then( m => m.EmployeeListPageModule)
          },
        ]
      },
      {
        path:'ledgerOverview',
        children:[
          {
            path: '',
            loadChildren: () => import('./ledgeroverview/ledgeroverview.module').then( m => m.LedgeroverviewPageModule)
          },
        ]
      },
      {
        path:'add-employee',
        children:[
          {
            path: '',
            loadChildren: () => import('./add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
          }
        ]
      },
      {
        path:'dala-ledger',
        children:[
          {
            path: '',
            loadChildren: () => import('./dala-ledger/dala-ledger.module').then( m => m.DalaLedgerPageModule)
          }
        ]
      },
      {
        path:'sitDetail',
        children:[
          {
            path: '',
            loadChildren: () => import('./sit-detail/sit-detail.module').then( m => m.SITDetailPageModule)
          },
        ]
      },
      {
        path:'unloaded',
        children:[
          {
            path: '',
            loadChildren: () => import('./unloaded/unloaded.module').then( m => m.UnloadedPageModule)
          },
        ]
      },
      {
        path:'recieved-sit',
        children:[
          {
            path: '',
            loadChildren: () => import('./recieved-sit/recieved-sit.module').then( m => m.RecievedSitPageModule)
          }
        ]
      },
      {
        path:'sit-overview',
        children:[
          {
            path: '',
            loadChildren: () => import('./sit-overview/sit-overview.module').then( m => m.SitOverviewPageModule)
          }
        ]
      },
      {
        path:'pending-sit',
        children:[
          {
            path: '',
            loadChildren: () => import('./pending-sit/pending-sit.module').then( m => m.PendingSitPageModule)
          }
        ]
      },
      {
        path:'recieved',
        children:[
          {
            path: '',
            loadChildren: () => import('./recieved/recieved.module').then ( m => m.RecievedPageModule)
          }
        ]
      },
      {
        path:'driver-list',
        children:[
          {
            path: '',
            loadChildren: () => import('./driver-list/driver-list.module').then( m => m.DriverListPageModule)
          }
        ]
      },
      {
        path:'labour-ledger',
        children:[
          {
            path: '',
            loadChildren: () => import('./labour-ledger/labour-ledger.module').then( m => m.LabourLedgerPageModule)
          }
        ]
      },
      {
        path:'account-page',
        children:[
          {
            path: '',
            loadChildren: () => import('./account-page/account-page.module').then( m => m.AccountPagePageModule)
          }
        ]
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
      },
      {
        path: 'add-employee',
        loadChildren: () => import('./add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
      },
      {
        path: 'account-page',
        loadChildren: () => import('./account-page/account-page.module').then( m => m.AccountPagePageModule)
      },
      {
        path: 'unloaded',
        loadChildren: () => import('./unloaded/unloaded.module').then( m => m.UnloadedPageModule)
      },
      {
        path: 'dala-ledger',
        loadChildren: () => import('./dala-ledger/dala-ledger.module').then( m => m.DalaLedgerPageModule)
      },
    ],
  },
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full',
  },
  {
    path: 'driver-list',
    loadChildren: () => import('./driver-list/driver-list.module').then( m => m.DriverListPageModule)
  },
  ,



  

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

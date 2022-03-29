import { SeeDueComponent } from './../modals/see-due/see-due.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitLedgerWidgetComponent } from './sit-ledger-widget/sit-ledger-widget.component';
import { EmployeeDataWidgetComponent } from './employee-data-widget/employee-data-widget.component';
import { IonicModule } from '@ionic/angular';
import { LabourLedgerWidgetComponent } from './labour-ledger-widget/labour-ledger-widget.component';
import { ProductLedgerWidgetComponent } from './product-ledger-widget/product-ledger-widget.component';
import { NgChartsModule } from 'ng2-charts';
import { ExpenseLedgerComponent } from './expense-ledger/expense-ledger.component';
import { DalaWidgetComponent } from './dala-widget/dala-widget.component';
import { RecievedLogComponent } from '../modals/recieved-log/recieved-log.component';
import {UnloadedLogComponent} from '../modals/unloaded-log/unloaded-log.component';
import { BaseComponentsModule } from '../base-components/base-components.module';
const widgets = [
  SitLedgerWidgetComponent,
  EmployeeDataWidgetComponent,
  LabourLedgerWidgetComponent,
  ProductLedgerWidgetComponent,
  ExpenseLedgerComponent,
  DalaWidgetComponent,
]



@NgModule({
  declarations: [widgets,RecievedLogComponent,UnloadedLogComponent,SeeDueComponent],
  imports: [
    CommonModule,
    NgChartsModule,
    IonicModule,
    BaseComponentsModule,
  ],
  exports: [widgets],
  
})
export class WidgetsModule { }

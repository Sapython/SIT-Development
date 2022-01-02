import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitLedgerWidgetComponent } from './sit-ledger-widget/sit-ledger-widget.component';
import { EmployeeDataWidgetComponent } from './employee-data-widget/employee-data-widget.component';
import { IonicModule } from '@ionic/angular';
import { LabourLedgerWidgetComponent } from './labour-ledger-widget/labour-ledger-widget.component';
import { ProductLedgerWidgetComponent } from './product-ledger-widget/product-ledger-widget.component';
import { NgChartsModule } from 'ng2-charts';
const widgets = [SitLedgerWidgetComponent,EmployeeDataWidgetComponent,LabourLedgerWidgetComponent,ProductLedgerWidgetComponent]



@NgModule({
  declarations: [widgets],
  imports: [
    CommonModule,
    NgChartsModule,
    IonicModule,
  ],
  exports: [widgets],
  
})
export class WidgetsModule { }

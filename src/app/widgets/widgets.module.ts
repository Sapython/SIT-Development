import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitLedgerWidgetComponent } from './sit-ledger-widget/sit-ledger-widget.component';
import { EmployeeDataWidgetComponent } from './employee-data-widget/employee-data-widget.component';
import { IonicModule } from '@ionic/angular';
import { LabourLedgerWidgetComponent } from './labour-ledger-widget/labour-ledger-widget.component';
const widgets = [SitLedgerWidgetComponent,EmployeeDataWidgetComponent,LabourLedgerWidgetComponent]



@NgModule({
  declarations: [widgets],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [widgets],
  
})
export class WidgetsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitLedgerWidgetComponent } from './sit-ledger-widget/sit-ledger-widget.component';
const widgets = [SitLedgerWidgetComponent]



@NgModule({
  declarations: [widgets],
  imports: [
    CommonModule
  ],
  exports: [widgets],
  
})
export class WidgetsModule { }

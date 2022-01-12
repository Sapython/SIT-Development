import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LedgeroverviewPageRoutingModule } from './ledgeroverview-routing.module';

import { LedgeroverviewPage } from './ledgeroverview.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    BaseComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LedgeroverviewPageRoutingModule,
    WidgetsModule,
    BaseComponentsModule
  ],
  declarations: [LedgeroverviewPage]
})
export class LedgeroverviewPageModule {}

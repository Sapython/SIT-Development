import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitdetailPageRoutingModule } from './sitdetail-routing.module';

import { SitdetailPage } from './sitdetail.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitdetailPageRoutingModule,
    BaseComponentsModule
  ],
  declarations: [SitdetailPage]
})
export class SitdetailPageModule {}

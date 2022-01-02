import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlphaPageRoutingModule } from './alpha-routing.module';

import { AlphaPage } from './alpha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlphaPageRoutingModule
  ],
  declarations: [AlphaPage]
})
export class AlphaPageModule {}

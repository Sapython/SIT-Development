import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecievedPageRoutingModule } from './recieved-routing.module';

import { RecievedPage } from './recieved.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecievedPageRoutingModule,
    BaseComponentsModule
  ],
  declarations: [RecievedPage]
})
export class RecievedPageModule {}

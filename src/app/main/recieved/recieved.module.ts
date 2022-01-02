import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecievedPageRoutingModule } from './recieved-routing.module';

import { RecievedPage } from './recieved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecievedPageRoutingModule
  ],
  declarations: [RecievedPage]
})
export class RecievedPageModule {}

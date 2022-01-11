import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecievedSitPageRoutingModule } from './recieved-sit-routing.module';

import { RecievedSitPage } from './recieved-sit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecievedSitPageRoutingModule
  ],
  declarations: [RecievedSitPage]
})
export class RecievedSitPageModule {}

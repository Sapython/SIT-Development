import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivedPageRoutingModule } from './received-routing.module';

import { ReceivedPage } from './received.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    ReceivedPageRoutingModule,
    BaseComponentsModule
  ],
  declarations: [ReceivedPage]
})
export class ReceivedPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnloadedPageRoutingModule } from './unloaded-routing.module';

import { UnloadedPage } from './unloaded.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UnloadedPageRoutingModule,
    BaseComponentsModule,
  ],
  declarations: [UnloadedPage]
})
export class UnloadedPageModule {}

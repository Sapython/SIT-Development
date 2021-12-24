import { MainComponent } from './main.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { BaseComponentsModule } from '../base-components/base-components.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BaseComponentsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }

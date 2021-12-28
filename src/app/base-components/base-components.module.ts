import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ComponentModule } from '../component/component.module';

const comps = [
  HeaderComponent,
]
@NgModule({
  declarations: [
    comps
  ],
  imports: [
    CommonModule,
    ComponentModule,
    IonicModule,
  ],
  exports: [
    comps
  ]
})
export class BaseComponentsModule { }

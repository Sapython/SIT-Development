import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const comps = [
  HeaderComponent,
]
@NgModule({
  declarations: [
    comps
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    comps
  ]
})
export class BaseComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserImageComponent } from './user-image/user-image.component';
import { IonicModule } from '@ionic/angular';


const components = [UserImageComponent];
@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    components
  ]
})
export class ComponentModule { }

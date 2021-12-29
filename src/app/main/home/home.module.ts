import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { BaseComponentsModule } from 'src/app/base-components/base-components.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    BaseComponentsModule,
    ComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    WidgetsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

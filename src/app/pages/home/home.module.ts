import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/modules/shared.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    FormsModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

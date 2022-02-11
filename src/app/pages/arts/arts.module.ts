import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtsPageRoutingModule } from './arts-routing.module';
import { SharedModule } from 'src/app/modules/shared.module';

import { ArtsPage } from './arts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtsPageRoutingModule,
    SharedModule
  ],
  declarations: [ArtsPage]
})
export class ArtsPageModule {}

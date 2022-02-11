import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NotFoundPageRoutingModule } from './not-found-routing.module';
import { SharedModule } from 'src/app/modules/shared.module';

import { NotFoundPage } from './not-found.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NotFoundPageRoutingModule,
    SharedModule
  ],
  declarations: [NotFoundPage]
})
export class NotFoundPageModule {}

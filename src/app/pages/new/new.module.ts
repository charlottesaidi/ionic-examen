import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';

import { NewPageRoutingModule } from './new-routing.module';
import { SharedModule } from 'src/app/modules/shared.module';

import { NewPage } from './new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPageRoutingModule,
    SharedModule
  ],
  providers: [Geolocation, NativeGeocoder],
  declarations: [NewPage]
})
export class NewPageModule {}

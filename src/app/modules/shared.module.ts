import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { AddfavDirective } from '../directives/addfav.directive';

const shared: Array<any> = [
  HeaderComponent,
  AddfavDirective
]

@NgModule({
  declarations: shared,
  imports: [
    CommonModule, 
    IonicModule,
    FormsModule,
  ],
  providers: [],
  exports: shared
})
export class SharedModule { }

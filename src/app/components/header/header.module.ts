import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    RouterModule
  ],
})
export class HeaderComponentModule {}
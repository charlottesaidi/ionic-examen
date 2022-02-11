import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtsPage } from './arts.page';

const routes: Routes = [
  {
    path: '',
    component: ArtsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtsPageRoutingModule {}

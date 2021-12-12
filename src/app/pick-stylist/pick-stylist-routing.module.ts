import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickStylistPage } from './pick-stylist.page';

const routes: Routes = [
  {
    path: '',
    component: PickStylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickStylistPageRoutingModule {}

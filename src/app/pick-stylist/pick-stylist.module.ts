import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickStylistPageRoutingModule } from './pick-stylist-routing.module';

import { PickStylistPage } from './pick-stylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickStylistPageRoutingModule
  ],
  declarations: [PickStylistPage]
})
export class PickStylistPageModule {}

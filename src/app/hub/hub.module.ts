import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HubPageRoutingModule } from './hub-routing.module';

import { HubPage } from './hub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HubPageRoutingModule
  ],
  declarations: [HubPage]
})
export class HubPageModule {}

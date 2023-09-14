import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperatePageRoutingModule } from './recuperate-routing.module';

import { RecuperatePage } from './recuperate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperatePageRoutingModule
  ],
  declarations: [RecuperatePage]
})
export class RecuperatePageModule {}

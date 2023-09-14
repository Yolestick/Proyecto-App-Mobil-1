import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperatePage } from './recuperate.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperatePageRoutingModule {}

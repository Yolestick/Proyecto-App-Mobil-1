import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HubPage } from './hub.page';

const routes: Routes = [
  {
    path: '',
    component: HubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HubPageRoutingModule {}

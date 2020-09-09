import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApresentaslidePage } from './apresentaslide.page';

const routes: Routes = [
  {
    path: '',
    component: ApresentaslidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApresentaslidePageRoutingModule {}

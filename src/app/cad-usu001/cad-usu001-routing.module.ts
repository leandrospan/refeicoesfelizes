import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadUsu001Page } from './cad-usu001.page';

const routes: Routes = [
  {
    path: '',
    component: CadUsu001Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadUsu001PageRoutingModule {}

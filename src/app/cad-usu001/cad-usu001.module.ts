import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadUsu001PageRoutingModule } from './cad-usu001-routing.module';

import { CadUsu001Page } from './cad-usu001.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadUsu001PageRoutingModule
  ],
  declarations: [CadUsu001Page]
})
export class CadUsu001PageModule {}

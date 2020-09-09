import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApresentaslidePageRoutingModule } from './apresentaslide-routing.module';

import { ApresentaslidePage } from './apresentaslide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApresentaslidePageRoutingModule
  ],
  declarations: [ApresentaslidePage]
})
export class ApresentaslidePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescripcionPage } from './descripcion';

@NgModule({
  declarations: [
    DescripcionPage,
  ],
  imports: [
    IonicPageModule.forChild(DescripcionPage),
  ],
})
export class DescripcionPageModule {}

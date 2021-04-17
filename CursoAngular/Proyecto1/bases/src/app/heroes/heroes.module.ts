import {CommonModule} from '@angular/common';
import { NgModel } from '@angular/forms';
import {HeroeComponent} from './heroe/heroe.component';
import {ListadoComponent} from './listado/listado.component';
import {NgModule} from '@angular/core';



@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule
{

}

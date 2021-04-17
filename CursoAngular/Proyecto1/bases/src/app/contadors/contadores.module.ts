import { NgModel} from '@angular/forms';
import { ContadorComponent} from './contadore/contador.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ]
})
export class ContadoresModule
{

}

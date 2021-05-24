import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { DynamicHostDirective } from './directiva/dynamic-host.directive';
import { DinamiccComponent } from './dinamicc/dinamicc.component';



@NgModule({
  declarations: [
    PadreComponent,
    DynamicHostDirective,
    DinamiccComponent
  ],
  entryComponents: [
    DinamiccComponent
  ],
  exports: [
    PadreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DinamiccomponentModule { }

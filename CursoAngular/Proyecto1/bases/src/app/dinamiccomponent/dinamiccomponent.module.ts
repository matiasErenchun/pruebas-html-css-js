import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { DynamicHostDirective } from './directiva/dynamic-host.directive';
import { DinamiccComponent } from './dinamicc/dinamicc.component';
import {ReactiveFormsModule} from '@angular/forms';



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
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DinamiccomponentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarpersonajeComponent } from './agregarpersonaje/agregarpersonaje.component';
import {DragonballzService} from './services/dragonballz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarpersonajeComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DragonballzService
  ]
})
export class DragonballzModule { }

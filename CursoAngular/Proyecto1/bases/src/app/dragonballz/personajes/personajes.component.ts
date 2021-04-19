import {Component, Input} from '@angular/core';
import {Personaje} from '../interfaces/dragonballz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent
{
  @Input('miPersonajes') personajes: Personaje[] = [];
}

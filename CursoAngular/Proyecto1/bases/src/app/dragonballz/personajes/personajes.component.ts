import {Component, Input} from '@angular/core';
import {Personaje} from '../interfaces/dragonballz.interface';
import {DragonballzService} from '../services/dragonballz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent
{
  get personajes(): Personaje[]
  {
    return this.dbzService.getPersonajes;
  }
  // tslint:disable-next-line:no-input-rename
  /*@Input('miPersonajes') personajes: Personaje[] = [];*/
  constructor(private dbzService: DragonballzService)
  {
    // tslint:disable-next-line:no-unused-expression
  }
}

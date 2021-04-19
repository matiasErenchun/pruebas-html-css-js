import {Injectable} from '@angular/core';
import {Personaje} from '../interfaces/dragonballz.interface';

@Injectable()
export class DragonballzService
{
  private personajes: Personaje[] =
    [
      {
        nombre: 'goku',
        poder: 15000
      },
      {
        nombre: 'Vegeta',
        poder: 7500
      }
    ];
  get getPersonajes(): Personaje[]
  {
    /*los 3 puntos basicamnete crean un nuevo arreglo identico rompiendo la referencia */
    return [...this.personajes];
  }
  constructor()
  {
    console.log('service On');
  }
  agregarPersonaje(personaje: Personaje): void
  {
    this.personajes.push(personaje);
  }
}

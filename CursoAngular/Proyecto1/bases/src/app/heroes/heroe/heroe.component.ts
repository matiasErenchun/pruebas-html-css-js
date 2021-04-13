/* tslint:disable:no-inferrable-types */
import {Component} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent
{
  nombre: string = 'Hulk';
  edad: number = 100;
  get nombreCapitalizado(): string
  {
    return this.nombre.toUpperCase();
  }
  obtener(): string
  {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void
  {
    this.nombre = 'SpiderMan';
  }

  cambiarEdad(): void
  {
    this.edad = 25;
  }
}

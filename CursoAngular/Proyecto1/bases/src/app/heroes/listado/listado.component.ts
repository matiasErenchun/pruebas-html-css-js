/* tslint:disable:no-inferrable-types */
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent
{
  heroes: string[] = ['dragon', 'unicornio', 'grifo', 'basilisco', 'banshee'];
  heroeBorrado: string = '';
  borrar(i: number): void
  {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

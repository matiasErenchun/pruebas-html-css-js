import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personaje} from '../interfaces/dragonballz.interface';
import {DragonballzService} from '../services/dragonballz.service';

@Component({
  selector: 'app-agregarpersonaje',
  templateUrl: './agregarpersonaje.component.html'
})
export class AgregarpersonajeComponent
{
  @Input()nuevo: Personaje = {nombre : ' ', poder : 0};
  // tslint:disable-next-line:no-output-on-prefix
  /*@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar( ): void
  {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo =
      {
      nombre: '',
      poder: 0
    };
  }*/
  constructor(private dbzService: DragonballzService) {}
  agregar(): void
  {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo =
      {
        nombre: '',
        poder: 0
      };
  }
}

/* tslint:disable:no-inferrable-types */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dinamicc',
  templateUrl: './dinamicc.component.html',
  styleUrls: ['./dinamicc.component.css']
})
export class DinamiccComponent implements OnInit {
  @Input() nombre: string = '';
  @Input() saludo: string = '';
  constructor()
  {
  }
  public setDatos(nombre: string, saludo: string): void
  {
    this.nombre = nombre;
    this.saludo = saludo;
  }
  public printValues(): void
  {
    console.log(this.nombre + ' ' + this.saludo );
  }
  public getNombre(): string
  {
    return this.nombre;
  }
  public getSaludo(): string
  {
    return this.saludo;
  }

  ngOnInit(): void
  {
  }

}

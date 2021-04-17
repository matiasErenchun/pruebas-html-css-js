/* tslint:disable:no-inferrable-types */
import { Component } from '@angular/core';

@Component
({
  selector: 'app-contador',
  template: `
    <h1> {{title}}</h1>
    <h3> el incremento o decremento es: <strong> {{base}}</strong></h3>
    <button (click)="sumar( base);"> + {{base}} </button>
    <span> {{ numero}} </span>
    <button (click)="sumar(-base);"> - {{base}} </button>
  `
})
export class ContadorComponent
{
  public title: string  = 'Contador app';
  public numero: number = 10;
  public base: number = 5;
  /*tslint:disable-next-line:typedef*/
  public sumar(valor: number)
  {
    this.numero += valor;
  }

}

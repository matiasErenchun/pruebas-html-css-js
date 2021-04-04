/* tslint:disable:no-inferrable-types */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  /*template: '<span>matias</span>'*/
})
export class AppComponent {
  public title: string  = 'Contador app';
  public numero: number = 10;
  public base: number = 5;
  /*tslint:disable-next-line:typedef*/
  public sumar(valor: number)
  {
    this.numero += valor;
  }
}

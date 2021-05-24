/* tslint:disable:no-inferrable-types */
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dinamicc',
  templateUrl: './dinamicc.component.html',
  styleUrls: ['./dinamicc.component.css']
})
export class DinamiccComponent implements OnInit {
  campos: FormGroup;
  @Input() nombre: string = '';
  @Input() saludo: string = '';
  private texto: string = '';
  constructor(private _formBuilder: FormBuilder)
  {
    this.campos = this._formBuilder.group(
      {
        texto: new FormControl('', Validators.required)
      });
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
  public guardar(): void
  {
    this.texto = this.campos.value.texto;
    console.log(this.getNombre() + ' ' + this.getSaludo() + ' dijo: ' + this.texto);
  }

  ngOnInit(): void
  {
  }

}

import {Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentRef} from '@angular/core';
import {DinamiccComponent} from '../dinamicc/dinamicc.component';
import {DynamicHostDirective} from '../directiva/dynamic-host.directive';

export interface Persona
{
  nombre: string;
  saludo: string;
}

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  @ViewChild(DynamicHostDirective) public dynamicHost: DynamicHostDirective | undefined;
  private personas: Persona[] =
    [{nombre: 'juna', saludo: 'hijo de puta'}, {nombre: 'dilan', saludo: 'tumama'}, {nombre: 'hijos de puta', saludo: 'hola'}];
  constructor( private comFacResol: ComponentFactoryResolver ) { }

  ngOnInit(): void
  {}
  public createComponent(): void
  {
    /* extraido de
    https://stackoverflow.com/questions/39280057/how-do-you-use-input-with-components-created-with-a-componentfactoryresolver*/
    let reff: ComponentRef<DinamiccComponent>[] | undefined = [];
    this.personas.forEach((persona: Persona) => {
      const component = this.comFacResol.resolveComponentFactory(DinamiccComponent);
      const contt = this.dynamicHost?.viewContainerRef.createComponent(component);
      contt?.instance.setDatos(persona.nombre, persona.saludo);
      // @ts-ignore
      reff.push(contt);
    });
  }

}

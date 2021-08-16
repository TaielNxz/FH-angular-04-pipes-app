import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Taiel';
  nombreUpper: string = 'TAIEL';
  nombreCompleto: string = 'TaIeL NuNeS';

  fecha: Date = new Date(); // el dia de hoy

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  // documentação de pipe operator do Angular: https://angular.io/api/common#pipes

  alerta: string =
    'O conhecimento impacta as nossas decisões e consequientemente os resultados!';

  today: Date = new Date();
}

import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  // documentação de pipe operator do Angular: https://angular.io/api/common#pipes

  alerta: string =
    'O conhecimento impacta as nossas decisões e consequientemente os resultados!';

  today: Date = new Date();
}

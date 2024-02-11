import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
})
export class LearningComponent {
  name = 'Laura';
  trajeto = {
    primeiraCidade: 'Rio de Janeiro',
    segundaCidade: 'São Paulo',
    terceiraCidade: 'Curitiba',
    quartaCidade: 'Florianópolis',
    quintaCidade: 'Porto Alegre',
  };
}

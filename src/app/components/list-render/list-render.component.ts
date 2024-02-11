import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  constructor(private listService: ListService) {}

  animals: Animal[] = [
    { name: 'Simba', type: 'Lion', age: 10 },
    { name: 'Tigrão', type: 'Tiger', age: 20 },
    { name: 'Dumbo', type: 'Elephant', age: 30 },
    { name: 'Martin', type: 'Zebra', age: 40 },
    { name: 'Spirit', type: 'Horse', age: 50 },
  ];

  animalDetails: string = '';

  showType(animal: Animal) {
    this.animalDetails = 'O ' + animal.name + ' é ' + animal.type;
  }

  removeAnimal(animal: Animal) {
    console.log('Remove animal');
    this.animals = this.listService.remove(this.animals, animal);
  }
}

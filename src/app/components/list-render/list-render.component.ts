import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  constructor(private listService: ListService) {
    this.getAnimals();
  }

  animals: Animal[] = [];

  animalDetails: string = '';

  detalhar(AnimalForDetail: Animal): void {
    location.assign('/list/' + AnimalForDetail.id);
  }

  showType(animal: Animal) {
    this.animalDetails = animal.name + ' é ' + animal.type;
  }

  removeAnimal(animal: Animal) {
    console.log('Remove animal');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}

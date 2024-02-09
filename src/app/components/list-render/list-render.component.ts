import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals = [
    { name: 'Lion', age: 10 },
    { name: 'Tiger', age: 20 },
    { name: 'Elephant', age: 30 },
    { name: 'Zebra', age: 40 },
    { name: 'Horse', age: 50 },
    { name: 'Rabbit', age: 60 },
    { name: 'Dragon', age: 70 },
    { name: 'Snake', age: 80 },
    { name: 'Goat', age: 90 },
    { name: 'Monkey', age: 100 },
    { name: 'Rooster', age: 110 },
    { name: 'Dog', age: 120 },
    { name: 'Pig', age: 130 },
    { name: 'Turtle', age: 140 },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  size = 40;
  color = 'Pink';
  classes = ['green-title', 'small-title'];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css',
})
export class IfRenderComponent {
  belive: boolean = true;
  name: string = 'Laura';
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css',
})
export class TwoWayBindingComponent {
  name: string = '';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { SecondComponentComponent } from "./components/second-component/second-component.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FirstComponentComponent, SecondComponentComponent, HeaderComponent]
})
export class AppComponent {
  title = 'hello';
  name = 'Laura';
  trajeto = {
    primeiraCidade: 'Rio de Janeiro',
    segundaCidade: 'São Paulo',
    terceiraCidade: 'Curitiba',
    quartaCidade: 'Florianópolis',
    quintaCidade: 'Porto Alegre'
  };
}

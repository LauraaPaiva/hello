import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { LearningComponent } from './components/learning/learning.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,
    LearningComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, UpperCasePipe, TitleCasePipe, DatePipe],
})
export class AppModule {}

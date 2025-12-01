import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainerComponent } from './trainer/trainer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TrainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('trainer-app');
}

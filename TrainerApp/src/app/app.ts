import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Trainer } from './trainer/trainer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Trainer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TrainerApp');
}

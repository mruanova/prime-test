import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    KnobModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('prime-test');
  volume: number = 50; // Initial volume level
  muted: boolean = false;
  toggleMute() {
    this.muted = !this.muted;
    this.volume = this.muted ? 0 : 50;
  }
}

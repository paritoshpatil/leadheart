import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Spotify-Test';
  top!: string;
  left!: string;
  height!: string;
  width!: string;

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: { pageY: number; pageX: number }) {
    this.top = $event.pageY + 'px';
    this.left = $event.pageX + 'px';
  }

  increaseCursorSize() {
    this.height = '100px';
    this.width = '100px';
  }

  decreaseCursorSize() {
    this.height = '20px';
    this.width = '20px';
  }
}

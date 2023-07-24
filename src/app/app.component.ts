import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'leadheart';
  top!: string;
  left!: string;
  height!: string;
  width!: string;

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: { pageY: number; pageX: number }) {
    this.top = $event.pageY + 'px';
    this.left = $event.pageX + 'px';
  }

  increaseCursorSize($event: any) {
    var rect = $event.target.getBoundingClientRect();
    console.log(rect);
    this.height = rect.height + 20 + 'px';
    this.width = rect.width + 20 + 'px';
  }

  decreaseCursorSize() {
    this.height = '20px';
    this.width = '20px';
  }

  playVideo() {
    let video = <HTMLVideoElement>document.getElementById('bg-video');
    video.play();
  }
}

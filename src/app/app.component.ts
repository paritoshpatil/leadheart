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

  isCursorLocked: boolean = false

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: { pageY: number; pageX: number }) {
    this.top = $event.pageY + 'px';
    this.left = $event.pageX + 'px';
  }

  increaseCursorSize($event: any) {
    this.isCursorLocked = true
    
    var rect = $event.target.getBoundingClientRect();
    console.log(rect);
    this.top = rect.top + rect.height / 2 + "px";
    this.left = rect.left + rect.width / 2 + "px";
    this.height = rect.height + 20 + 'px';
    this.width = rect.width + 20 + 'px';
  }

  decreaseCursorSize() {
    this.isCursorLocked = false;

    this.height = '20px';
    this.width = '20px';
  }

  playVideo() {
    let video = <HTMLVideoElement>document.getElementById('bg-video');
    video.play();
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import {
  IpadCursorConfig,
  IpadCursorStyle,
  initCursor,
  updateConfig,
} from 'ipad-cursor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'leadheart';

  ngOnInit() {
    const normalStyle: IpadCursorStyle = { background: 'white' };
    const blockStyle: IpadCursorStyle = {
      background: 'rgb(255,255,255)',
      scale: 1.2,
    };
    const textStyle: IpadCursorStyle = {
      background: 'rgb(255,255,255)',
      radius: '5%',
    };

    const config: IpadCursorConfig = {
      normalStyle,
      blockStyle,
      textStyle,
      adsorptionStrength: 3,
      className: 'xxx',
    };
    initCursor(config);
    // updateConfig({
    //   adsorptionStrength: 30,
    // });

    var cursorX: any = document.querySelector('.xxx');
    cursorX.style.mixBlendMode = 'difference';
  }

  playVideo() {
    let video = <HTMLVideoElement>document.getElementById('bg-video');
    video.play();
  }
}

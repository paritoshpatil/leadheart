import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoverableTextComponent } from './hoverable-text/hoverable-text.component';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyTrackComponent } from './spotify-track/spotify-track.component';

@NgModule({
  declarations: [AppComponent, HoverableTextComponent, SpotifyTrackComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-spotify-track',
  templateUrl: './spotify-track.component.html',
  styleUrls: ['./spotify-track.component.sass'],
})
export class SpotifyTrackComponent implements OnInit {
  artistId: string = '6JgVrOl5nLrdaT6qOSbh1K';
  oauthToken!: string;
  market: string = 'IN';
  contentType: string = 'application/json';

  topTracks: any;
  albumCovers: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    var client_id = 'b1f67cbbf69f448cb0d0d0ec4f7a2d59'; // Your client id
    var client_secret = '4819ead624034032ba29df0f3588adff'; // Your secret

    var querystring = require('querystring');

    var bodyContent = {
      grant_type: 'client_credentials',
    };

    var headers = new HttpHeaders()
      .set(
        'Authorization',
        'Basic ' +
          Buffer.from(client_id + ':' + client_secret).toString('base64')
      )
      .set('Content-Type', 'application/x-www-form-urlencoded');
    // .set('grant_type', 'client_credentials');

    console.log(bodyContent);

    this.http
      .post<any>(
        'https://accounts.spotify.com/api/token',
        querystring.stringify(bodyContent),
        {
          headers: headers,
        }
      )
      .subscribe((response: any) => {
        console.log('RESPONSE FROM AUTH');
        console.log(response.access_token);

        this.oauthToken = response.access_token;

        console.log('GET TOP TRACKS RUN');
        this.getTopTracks();
      });
  }

  getTopTracks() {
    const headers = new HttpHeaders()
      .set('content-type', this.contentType)
      .set('Authorization', 'Bearer ' + this.oauthToken)
      .set('Accept', this.contentType);

    this.http
      .get<any>(
        `https://api.spotify.com/v1/artists/${this.artistId}/top-tracks?market=${this.market}`,
        { headers: headers }
      )
      .subscribe((response: any) => {
        console.log(response);
        this.topTracks = response.tracks;

        console.log('TOPTRACKS');
        console.log(this.topTracks);
        this.topTracks.forEach((element: any) => {
          this.albumCovers = [...this.albumCovers, element.album.images[0].url];
        });

        console.log('ALBUM COVERS');
        console.log(this.albumCovers);
      });
  }

  getArtist() {}
}

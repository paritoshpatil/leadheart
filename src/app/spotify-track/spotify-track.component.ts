import {Component, Input, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export type TrackType = 'single' | 'album';

@Component({
  selector: 'app-spotify-track',
  templateUrl: './spotify-track.component.html',
  styleUrls: ['./spotify-track.component.sass'],
})
export class SpotifyTrackComponent implements OnInit {
  artistId: string = '6JgVrOl5nLrdaT6qOSbh1K'; //leadheart
  // artistId: string = '6i50rQJbETLRREwFn3plcw'; //lifafa
  oauthToken!: string;
  market: string = 'IN';
  contentType: string = 'application/json';

  topTracks: any;
  albumCovers: any = [];


  albums: any = [];
  singles: any = [];
  @Input() trackType: TrackType = 'single';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    var client_id = environment.spotify_client_id; // Your client id
    var client_secret = environment.spotify_client_secret; // Your secret

    var bodyContent : URLSearchParams = new URLSearchParams({
      grant_type: 'client_credentials',
    });

    var headers = new HttpHeaders()
      .set(
        'Authorization',
        'Basic ' +
          Buffer.from(client_id + ':' + client_secret).toString('base64')
      )
      .set('Content-Type', 'application/x-www-form-urlencoded');
    // .set('grant_type', 'client_credentials');


    this.http
      .post<any>(
        'https://accounts.spotify.com/api/token',
        bodyContent.toString(),
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
        this.getAlbums();
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
        this.topTracks = response.tracks;

        this.topTracks.forEach((element: any) => {
          this.albumCovers = [...this.albumCovers, element.album.images[0].url];
        });
      });
  }

  getArtist() {
    const headers = new HttpHeaders()
      .set('content-type', this.contentType)
      .set('Authorization', 'Bearer ' + this.oauthToken)
      .set('Accept', this.contentType);

    this.http
      .get<any>(`https://api.spotify.com/v1/artists/${this.artistId}`, {
        headers: headers,
      })
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  getAlbums() {
    const headers = new HttpHeaders()
      .set('content-type', this.contentType)
      .set('Authorization', 'Bearer ' + this.oauthToken)
      .set('Accept', this.contentType);

    this.http
      .get<any>(`https://api.spotify.com/v1/artists/${this.artistId}/albums`, {
        headers: headers,
      })
      .subscribe((response: any) => {
        console.log(response);
        response.items.forEach((element: any) => {
            if (element.album_type === 'single') {
              this.singles.push(element);
            }
            else if (element.album_type === 'album') {
              this.albums.push(element);
            }
        });
      });
  }
}

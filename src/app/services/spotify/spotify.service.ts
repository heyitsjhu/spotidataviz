import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  constructor(private _http: HttpClient) {
  }

  getSearchResults() {
    console.log('get search in spotify service works');
    return this._http.get('/api/results').map(res => res);
  }
  searchMusic(str:string, type='track') {
    // this._auth.getAccessToken();
    // TODO: account for empty strings
    // this.spotifyApiUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';
    // Return an object containing a list of artists and tracks containing the given search query.
    // return this._http.get(this.spotifyApiUrl, this.httpOptions)
  }

  // getAccessToken() {
  //   this._http.get(this.spotifyAuthUrl, this.httpOptions)
  //       .subscribe(data => console.log(data));
  //   console.log('works!');
  // }

}

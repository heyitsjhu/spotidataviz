import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  constructor(private _http: HttpClient) {
  }

  getSearchResults(query: string) {
    query = query.trim();
    const options = query ? { params: new HttpParams().set('q', query) } : {};

    return this._http.get('/api/results', options).map(res => res);
  }

  getTrackAudioFeatures(id: string) {
    id = id.trim();
    const options = id ? { params: new HttpParams().set('id', id) } : {};

    return this._http.get('/api/track', options).map(res => res);
  }

}

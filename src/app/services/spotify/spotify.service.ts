import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  constructor(private _http: HttpClient) {
  }

  getResults(type: string, query: string) {
    type = type.trim();
    query = query.trim();
    const options = { params: new HttpParams().append('t', type).append('q', query) };

    return this._http.get('/api/results', options).map(res => res);
  }

}

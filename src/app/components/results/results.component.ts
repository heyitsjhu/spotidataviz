import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { SpotifyService } from '../../services/spotify/spotify.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input('queryString') queryString: string;
  results: any[];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.fetchResults('odesza');
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log(changes['queryString'].currentValue);
    this.fetchResults(changes['queryString'].currentValue);
  }

  fetchResults(query) {
    if (query) {
      this._spotifyService.getSearchResults(query)
        .subscribe(results => {
          console.log('ngInit running in search component');
            this.results = results["tracks"].items;
      });
    }
  }

  setTrack(id) {
    console.log('track id: ' + id );
  }
}

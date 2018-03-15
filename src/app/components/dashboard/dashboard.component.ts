import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { SearchComponent } from '../search/search.component';
import { ResultsComponent } from '../results/results.component';

import { SpotifyService } from '../../services/spotify/spotify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild(SearchComponent)
  private searchComponent: SearchComponent;
  @ViewChild(ResultsComponent)
  private resultsComponent: ResultsComponent;

  searchResults: any;
  trackAudioFeatures: any;
  trackAudioAnalysis: any;

  constructor(
    private _spotifyService: SpotifyService
  ){}

  ngOnInit() {
    this.fetchResults('search', 'odesza');
  }
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    // setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  onCapturedSearch() {
    let query = this.searchComponent.getSearchString();
    console.log(`(${this.constructor.name}): onCapturedSearch() received search emitter with value: ${query}`);
    this.fetchResults('search', query);
  }

  onCapturedTrack() {
    let trackId = this.resultsComponent.getTrackId();;
    console.log(`(${this.constructor.name}): onCapturedTrack() received results emitter with id: ${trackId}`);
    this.fetchResults('audio-features', trackId);
    this.fetchResults('audio-analysis', trackId);
  }

  fetchResults(endpoint, searchQuery) {
    if (searchQuery) {
      this._spotifyService.getResults(endpoint, searchQuery)
        .subscribe(results => {
          switch (endpoint) {
          case 'search':
            this.searchResults = results["tracks"].items;
            break;
          case 'audio-features':
            this.trackAudioFeatures = results;
            console.log('Track Audio Features Result:', results);
            break;
          case 'audio-analysis':
            this.trackAudioAnalysis = results;
            console.log('Track Analysis Result:', results);
          }
        });
    }
  }

}

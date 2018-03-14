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

  searchResults: any[];

  constructor(
    private _spotifyService: SpotifyService
  ){}

  ngOnInit() {
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
    this.fetchSearchResults(query);
  }

  onCapturedTrack() {
    let trackId = this.resultsComponent.getTrackId();;
    console.log(`(${this.constructor.name}): onCapturedTrack() received results emitter with id: ${trackId}`);
    this.fetchTrackAudioFeatures(trackId);
  }

  fetchSearchResults(searchQuery) {
    if (searchQuery) {
      this._spotifyService.getSearchResults(searchQuery)
        .subscribe(results => {
          this.searchResults = results["tracks"].items;
          console.log(`Fetched results (count: ${this.searchResults.length})`);
      });
    }
  }

  fetchTrackAudioFeatures(trackId) {
    if (trackId) {
      this._spotifyService.getTrackAudioFeatures(trackId)
        .subscribe(result => {
          // this.searchResults = results["tracks"].items;
          console.log('Track Analysis Result:', result);
      });
    }
  }

}

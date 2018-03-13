import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify/spotify.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: any = [];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
     // Retrieve search results from API
    this._spotifyService.getSearchResults()
      .subscribe(results => {
        console.log('ngInit running in search component');
        console.log(results);
        this.results = results.tracks.items;
      });
  }

}

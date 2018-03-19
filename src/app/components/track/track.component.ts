import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  @Input('trackAudioFeatures') trackAudioFeatures: any[];
  @Input('trackAudioAnalysis') trackAudioAnalysis: any[];

  featuresList = [
    'acousticness',
    'danceability',
    'duration_ms',
    'energy',
    'instrumentalness',
    'liveness',
    'loudness',
    'speechiness',
    'tempo',
    'valence'
  ]

  constructor() { }

  ngOnInit() {
  }

  format(number) {
  }
}

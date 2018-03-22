import { Component, Input, OnInit, OnChanges } from '@angular/core';
import * as d3 from 'd3';

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

  ngOnChanges(changes) {
    if ( Object.keys(changes)[0] === 'trackAudioAnalysis' ) {
      console.log('changes', changes['trackAudioAnalysis']);
      let data = changes['trackAudioAnalysis']['currentValue'];
      this.generateAudioAnalysis(data);
    }
  }

  generateAudioAnalysis(data) {
    let audioBars = data['bars'];
    let audioBeats = data['beats'];
    let audioMeta = data['meta'];
    let audioSections = data['sections'];
    let audioSegments = data['segments'];
    let audioTatum = data['tatums'];
    let audioTrack = data['track'];

    let svgContainer = d3.select('.track__analysis')
      .append('svg')
      .selectAll('span');

    console.log(audioBars, audioBeats, audioMeta, audioSections, audioSegments, audioTatum, audioTrack);
    return d3.select('.track__analysis')
      .append('svg')
      .selectAll('span')
      .data(audioBars)
      .enter().append('span')
      .text(function(d) { return "I’m number " + d + "!"; });
  }
  format(number) {
  }
}

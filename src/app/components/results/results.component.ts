import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input('searchResults') searchResults: any[];
  @Output() onTrackSelected = new EventEmitter();
  selectedTrack:string;

  constructor() { }

  onTrackSelect(trackId) {
    console.log(`(${this.constructor.name}): Track select emitter triggered`);
    this.selectedTrack = trackId;
    this.onTrackSelected.emit(null);
  }

  getTrackId() {
    return this.selectedTrack;
  }

}

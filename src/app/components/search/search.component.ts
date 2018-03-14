import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input('searchString') searchString: string;
  @Output() onSearchUpdated = new EventEmitter();

  constructor() {
  }

  getSearchString() {
    return this.searchString;
  }

  /*
   * In search.component.html, sendEmitter() is fired everytime there's
   * a change to the input, via (keyup).
   *
   * This emitter is then captured by the Dashboard Component. This is achieved
   * by adding a property binding, (onSearchUpdated)="onSearchUpdated($event)",
   * to the app-search-bar component inside dashboard.component.html.
   */
  onInputChange() {
    console.log(`(${this.constructor.name}): Search input emitter triggered`);
    this.onSearchUpdated.emit(null);
  }

}

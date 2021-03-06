import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { DataService } from './services/data/data.service';
import { SpotifyService } from './services/spotify/spotify.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { TrackComponent } from './components/track/track.component';
import { AudioFeaturesComponent } from './components/track/audio-features/audio-features.component';
import { TrackAnalysisComponent } from './components/track/track-analysis/track-analysis.component';

const appRoutes: Routes = [
  {
    path: 'track',
    component: TrackComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResultsComponent,
    SearchComponent,
    TrackComponent,
    AudioFeaturesComponent,
    TrackAnalysisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

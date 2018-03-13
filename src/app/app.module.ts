import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';

import { SpotifyService } from './services/spotify/spotify.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'results',
    pathMatch: 'full'
  },
  {
    path: 'results',
    component: ResultsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

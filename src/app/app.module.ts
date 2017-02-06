import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';

import { MatchesComponent } from './matches/matches.component';
import { MatchesService } from './matches.service';

import { MatchDetailComponent } from './match-detail/match-detail.component';
import { MatchDetailsService } from './match-details.service'

import { NotesService } from './notes.service'

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'matches',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'matches',
    component: MatchesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    MatchesComponent,
    MatchDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [
    PostsService,
    MatchesService,
    MatchDetailsService,
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

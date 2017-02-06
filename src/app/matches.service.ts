import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MatchesService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllMatches() {
    return this.http.get('/api/matches')
      .map(res => res.json());
  }
}
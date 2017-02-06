import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { MatchDetails } from './match-details'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MatchDetailsService {

  constructor(private http: Http) { }

	handleError(err : Error): void{
		console.log(err);
	}

  getMatchDetails(id: number) : Promise<MatchDetails> {
  	return this.http.get('/api/match/:'+id)
      .toPromise()
      .then(details => details.json() as MatchDetails);
  }

}

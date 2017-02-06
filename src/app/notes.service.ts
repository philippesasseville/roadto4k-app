import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Notes } from './notes';

import 'rxjs/add/operator/map';


@Injectable()
export class NotesService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

	handleError(err : Error): void{
		console.log(err);
	}

  postNotes(notes:Notes): Promise<Notes> {
  	return this.http
    .post('/api/notes', JSON.stringify({"notes" : notes}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }

  getNotes(id: number): Promise<Notes>{
  	return this.http.get('/api/notes/:'+id)
  		.toPromise()
  		.then(notes => notes.json() as Notes);
  }

}

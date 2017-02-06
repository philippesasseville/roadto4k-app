import { Component, Input } from '@angular/core';

import { NotesService } from '../notes.service';

import { Match } from '../match';

import { Notes } from '../notes';


@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent {

constructor(private notesService : NotesService) {}

  @Input()
  match: Match;

  onSave(): void {
  	console.log("onSave() called");
    this.notesService.postNotes(new Notes(this.match.match_id,this.match.notes));
  }

}

import { Component, OnInit } from '@angular/core';

import { MatchesService } from '../matches.service';
import { MatchDetailsService } from '../match-details.service'

import { MatchDetails } from '../match-details'

import { NotesService } from '../notes.service';

import { Match } from '../match';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  // instantiate matches to an empty array
  matches: Match[] = [];
  selectedMatch: Match;

  constructor(private matchesService: MatchesService, private matchDetailsService : MatchDetailsService, private notesService: NotesService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.matchesService.getAllMatches().subscribe(matches => {
      this.matches = matches;
    });
  }

  onSelect(match: Match): void {
    this.matchDetailsService.getMatchDetails(match.match_id)
                            .then((details) => {
                              match.details = details;
                              this.selectedMatch = match;
                            });
    this.notesService.getNotes(match.match_id)
                     .then((notes) => {
                        match.notes = notes.notes;
                     }).catch(err => {
                       console.log("no record found")
                     });
  }
}

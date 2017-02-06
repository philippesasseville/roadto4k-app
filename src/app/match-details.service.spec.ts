/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatchDetailsService } from './match-details.service';

describe('MatchDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchDetailsService]
    });
  });

  it('should ...', inject([MatchDetailsService], (service: MatchDetailsService) => {
    expect(service).toBeTruthy();
  }));
});

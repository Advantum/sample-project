import { TestBed, inject } from '@angular/core/testing';
import {Journal} from '../models/journal'
import { JournalService } from './journal.service';

describe('JournalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JournalService]
    });
  });

  it('should be created', inject([JournalService], (service: JournalService) => {
    expect(service).toBeTruthy();
  }));

  describe('Journals endpoint', () => {

      it('should try to make a POST request to the proper URL',

      );

      it('should return all journals submitted to enpoint as response',

      );

    });

});

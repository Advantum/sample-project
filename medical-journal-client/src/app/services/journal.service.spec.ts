import { TestBed, inject } from '@angular/core/testing';
import {Journal} from '../models/journal'
import { JournalService } from './journal.service';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions} from '@angular/http';
import { MockBackend } from '@angular/http/testing';


describe('JournalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpModule],
      providers: [JournalService, { provide: XHRBackend, useClass: MockBackend }]
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

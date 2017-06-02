import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {User} from '../models/user'
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [UserService, { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('getUserByEmail endpoint', () => {  

      it('should return an user', inject([UserService, XHRBackend], (userService, mockBackend) => {
         const mockResponse = {
          data: [
            { id: 0, firstname: 'Test', lastname: 'Test', email: 'Test', password: 'Test' , role: 'Publisher' }
          ]
        };
        const email ="x@x.com"

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        
        userService.getUserByEmail(email).subscribe((user) => {
          expect(user.length).toBe(1);
        });
      }));
      
    });

});

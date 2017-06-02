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

      it('should return an user when all parameters sent', inject([UserService, XHRBackend], (userService, mockBackend) => {
         const mockResponse = {
          data: [
            { id: 'x@x.com', firstname: 'Test', lastname: 'Test', email: 'x@x.com', password: 'Test' , role: 'Publisher' }
          ]
        };
        const userPayLoad = {
          email :"x@x.com"
        }
        

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        
        userService.getUserByEmail(userPayLoad).subscribe((user) => {
          expect(user.data.length).toBe(1);
        });
      }));
      
      it('should not return an user when email param not set', inject([UserService, XHRBackend], (userService, mockBackend) => {
        
        const userPayLoad = {
          name :"x@x.com"
        }
        

        mockBackend.connections.subscribe((connection) => {
          connection.mockError(new Response(new ResponseOptions({
            body: JSON.stringify({ error: 'Internal Server Error' }),
            status: 500,
          })));
        });
        
        userService.getUserByEmail(userPayLoad).subscribe((user) => {
          console.log(user);
          expect(user).toBeUndefined();
        }, err => {
               expect(err).toBeDefined();
            });
      }));
      

    });

});

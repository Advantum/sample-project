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

    describe('authenticateUser endpoint', () => {
        it('should return an user when all parameters sent', inject([UserService, XHRBackend], (userService, mockBackend) => {
         const mockResponse = {
          data: [
            { id: 'x@x.com', firstname: 'Test', lastname: 'Test', email: 'x@x.com', password: 'Test' , role: 'Publisher' }
          ]
        };

        const userPayLoad = {
          email :"x@x.com",
          password: "xxxx"
        }

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse),
            status: 200
          })));
        });

        userService.authenticateUser(userPayLoad).subscribe((successResult) => {
          expect(successResult).toBeDefined();
        });
      }));
    });

    describe('registerUser endpoint', () => {
        it('should return an user when all parameters sent', inject([UserService, XHRBackend], (userService, mockBackend) => {
         const mockResponse = {
          data: [
            { id: 'x@x.com', firstname: 'Test', lastname: 'Test', email: 'x@x.com', password: 'Test' , role: 'Publisher' }
          ]
        };

        const userPayLoad = {
          email :"x@x.com",
          password: "xxxx"
        }

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse),
            status: 200
          })));
        });

        userService.registerUser(userPayLoad).subscribe((successResult) => {
          expect(successResult).toBeDefined();
        });
      }));
    });


    describe('getLocalValues endpoint', () => {
      beforeEach(() => {
        var store = {};

        spyOn(localStorage, 'getItem').and.callFake( (key:string):String => {
        return store[key] || null;
        });
        spyOn(localStorage, 'removeItem').and.callFake((key:string):void =>  {
          delete store[key];
        });
        spyOn(localStorage, 'setItem').and.callFake((key:string, value:string):string =>  {
          return store[key] = <string>value;
        });
        spyOn(localStorage, 'clear').and.callFake(() =>  {
            store = {};
        });

        localStorage.setItem('user', 'Test');
        localStorage.setItem('role', 'Publisher');
      });
      it('should return an object once local Storage Values found', inject([UserService], (userService) => {
          var successResult = userService.getLocalValues();
          expect(successResult).toBeDefined();
          expect(successResult.userId).toBe("Test");
          expect(successResult.userRole).toBe("Publisher");
      }));
    });


});

import { TestBed, inject } from '@angular/core/testing';
import {User} from '../models/user'
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('Registration endpoint', () => {
      
      it('should try to make a POST request to the proper URL', 
        
      );  

      it('should return user submitted to enpoint as response', 
        
      ); 
      
    });

});

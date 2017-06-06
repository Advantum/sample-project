import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { LoginComponent } from '../login/login.component';
import { NgModule }      from '@angular/core';
 import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { UserService } from '../../services/user.service';
import { HttpModule } from '@angular/http';



describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router = {
      navigate: jasmine.createSpy('navigate')
    }
  beforeEach(async(() => {
    const appRoutes: Routes = [
  { path: 'login', component: LoginComponent}]
    

    TestBed.configureTestingModule({
       imports: [
         FormsModule,
         HttpModule,
        RouterModule.forRoot(appRoutes)
      ],
      providers: [UserService, {provide: APP_BASE_HREF, useValue : '/' }, { provide: Router, useValue: router }],
      declarations: [ NavbarComponent,
      LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('onLogoutClick function', () => {
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

       xit('should clear all defined localStorage values & navigate to login page', () => {
          component.onLogoutClick();
          expect(localStorage.clear).toHaveBeenCalled();
          expect(localStorage.getItem('user')).toBeNull();
          expect(localStorage.getItem('role')).toBeNull();
          expect(router.navigate).toHaveBeenCalledWith(['/login']);
      });
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule }      from '@angular/core';
 import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login.component';
import { UserService } from '../../services/user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const appRoutes: Routes = [
  { path: 'login', component: LoginComponent}
];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
      ],
      providers: [UserService, {provide: APP_BASE_HREF, useValue : '/' }],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('errorMessage should be defined on initial load ', () => {
    component.ngOnInit();
    expect(component.errorMessage).toBeDefined();
  });

  describe('onLogin function', () => {
    
  });


  describe('onLogout function', () => {
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

      it('should clear all defined localStorage values', () => {
        component.onLogout();
        expect(localStorage.clear).toHaveBeenCalled();
        expect(localStorage.getItem('user')).toBeNull();
        expect(localStorage.getItem('role')).toBeNull();
      });
  })
});

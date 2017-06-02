import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { LoginComponent } from '../login/login.component';
import { NgModule }      from '@angular/core';
 import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { UserService } from '../../services/user.service';
import { HttpModule } from '@angular/http';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    const appRoutes: Routes = [
  { path: 'login', component: LoginComponent}]

    TestBed.configureTestingModule({
       imports: [
         FormsModule,
         HttpModule,
        RouterModule.forRoot(appRoutes)
      ],
      providers: [UserService, {provide: APP_BASE_HREF, useValue : '/' }],
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
});

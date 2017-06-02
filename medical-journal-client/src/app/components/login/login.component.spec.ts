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
});

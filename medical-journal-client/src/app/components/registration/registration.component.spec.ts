import { inject,async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { NgModule }      from '@angular/core';
import { FormsModule, FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule }   from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  const appRoutes: Routes = [
  { path: 'register', component: RegistrationComponent}
];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
      ],
      providers: [UserService, {provide: APP_BASE_HREF, useValue : '/' }],
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('registerUser', () => {
     it('should be defined', () => {
      
    });

    it('should be defined', () => {
      
    });
  });

});

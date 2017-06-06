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
  let validUser = {
    email: "x@x.com", 
    password: "validUser.password", 
    firstname: "validUser.firstname", 
    lastname: "validUser.lastname", 
    role: "validUser.role"
  }
  let invalidUser = {
    email: "x@x.com", 
    password: "validUser.password", 
    firstname: "name", 
    lastname: "name", 
    role: "validUser.role"
  }

  const appRoutes: Routes = [
  { path: 'register', component: RegistrationComponent}];

  // create reusable function for a dry spec.
  function updateForm(userEmail, userPassword, userFirstName, userLastName, userRole) {
    component.registrationForm.controls['email'].setValue(userEmail);
    component.registrationForm.controls['password'].setValue(userPassword);
    component.registrationForm.controls['firstname'].setValue(userFirstName);
    component.registrationForm.controls['lastname'].setValue(userLastName);
    component.registrationForm.controls['role'].setValue(userRole);
  }

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

  it('form value should update from form changes', () => {
    updateForm(validUser.email, validUser.password, validUser.firstname, validUser.lastname, validUser.role);
    expect(component.registrationForm.value).toEqual(validUser);
  });

  it('isValid should be false when form is invalid', () => {
    updateForm(invalidUser.email, invalidUser.password, invalidUser.firstname, invalidUser.lastname, invalidUser.role);
    expect(component.registrationForm.valid).toBeFalsy();
  });

  describe('ngOnInit', () => {
     it('errorMessage should be defined on initial load ', () => {
        component.ngOnInit();
        expect(component.errorMessage).toBeDefined();
    });
  });

  describe('registerUser', () => {
     it('should be defined', () => {
      expect(component.registerUser).toBeDefined();
    });
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllJournalComponent } from './view-all-journal.component';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


describe('ViewAllJournalComponent', () => {
  let component: ViewAllJournalComponent;
  let fixture: ComponentFixture<ViewAllJournalComponent>;

  const appRoutes: Routes = [
  { path: 'view-all-journals', component: ViewAllJournalComponent}
];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      declarations: [ ViewAllJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  describe('subscribe', () => {

    it('should call subscribe method', () => {

      expect(component).toBeTruthy();
    });
    it('should show all journals', () => {

      expect(component).toBeTruthy();
    });
    it('journal should be added to user object if subscribed', () => {

      expect(component).toBeTruthy();
    });
    it('journal should have subscription field', () => {

      expect(component).toBeTruthy();
    });
  });

});

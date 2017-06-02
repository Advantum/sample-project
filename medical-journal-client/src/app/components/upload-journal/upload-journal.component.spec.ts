import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadJournalComponent } from './upload-journal.component';
import { NgModule }      from '@angular/core';
 import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { FileUploader } from 'ng2-file-upload';

describe('UploadJournalComponent', () => {
  let component: UploadJournalComponent;
  let fixture: ComponentFixture<UploadJournalComponent>;

  beforeEach(async(() => {
    const appRoutes: Routes = [
  { path: 'upload-journal', component: UploadJournalComponent}]
  
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FileUploader
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      declarations: [ UploadJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

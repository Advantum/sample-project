import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadJournalComponent } from './upload-journal.component';

describe('UploadJournalComponent', () => {
  let component: UploadJournalComponent;
  let fixture: ComponentFixture<UploadJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

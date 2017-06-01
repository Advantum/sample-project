import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllJournalComponent } from './view-all-journal.component';

describe('ViewAllJournalComponent', () => {
  let component: ViewAllJournalComponent;
  let fixture: ComponentFixture<ViewAllJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});

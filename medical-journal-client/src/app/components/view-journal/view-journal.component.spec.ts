import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ViewJournalComponent } from './view-journal.component';

describe('ViewJournalComponent', () => {
  let component: ViewJournalComponent;
  let fixture: ComponentFixture<ViewJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         Router
      ],
      declarations: [ ViewJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

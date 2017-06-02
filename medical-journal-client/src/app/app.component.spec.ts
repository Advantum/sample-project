import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: HomeComponent}
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes)
      ],
       providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Medical Journal'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Medical Journal');
  }));

  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Medical Journal');
  }));
});

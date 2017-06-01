import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule, FileUploader } from 'ng2-file-upload';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UploadJournalComponent } from './components/upload-journal/upload-journal.component';
import { ViewAllJournalComponent } from './components/view-all-journal/view-all-journal.component';
import { ViewJournalComponent } from './components/view-journal/view-journal.component';

import { UserService } from './services/user.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'upload-journal', component: UploadJournalComponent},
  { path: 'view-all-journal', component: ViewAllJournalComponent},
  { path: 'view-journal', component: ViewJournalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    UploadJournalComponent,
    ViewAllJournalComponent,
    ViewJournalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

// class FileSelectDirective
@Directive({ selector: '[ng2FileSelect]' })
// class FileDropDirective
@Directive({ selector: '[ng2FileDrop]' })

export class AppModule { }

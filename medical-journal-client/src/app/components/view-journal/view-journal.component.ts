import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { JournalService } from '../../services/journal.service';
import {Journal} from '../../models/journal';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-journal',
  templateUrl: './view-journal.component.html',
  styleUrls: ['./view-journal.component.css'],
  providers: [JournalService]
})
export class ViewJournalComponent implements OnInit {

  journalId: any;
  journal: Journal;
  constructor(private activatedRoute: ActivatedRoute, private journalService: JournalService, private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    // subscribe to router params event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.journalId = params['id'];
    });

      this.journalService.getJounalById(this.journalId)
        .subscribe(journalData => {
          this.journal = journalData;
          console.log("this.journal: ",  this.journal);
        },
          err => {
            console.log(err);
          });
      }

    fileURL(fileLocation) {
      console.log(fileLocation);
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf');
      //return this.sanitizer.bypassSecurityTrustResourceUrl(fileLocation);
    }
  }


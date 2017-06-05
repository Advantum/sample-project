import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-view-journal',
  templateUrl: './view-journal.component.html',
  styleUrls: ['./view-journal.component.css'],
  providers: [JournalService]
})
export class ViewJournalComponent implements OnInit {

  journalId: any;
  journal: any;
  constructor(private activatedRoute: ActivatedRoute, private journalService: JournalService) { }

  ngOnInit() {
    // subscribe to router params event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.journalId = params['id'];
    });

      this.journalService.getJounalById(this.journalId)
        .subscribe(journalData => {
          this.journal = journalData;
        },
          err => {
            console.log("An error occured");
          });
      }
  }

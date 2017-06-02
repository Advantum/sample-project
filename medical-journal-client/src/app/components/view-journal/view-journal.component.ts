import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-view-journal',
  templateUrl: './view-journal.component.html',
  styleUrls: ['./view-journal.component.css']
})
export class ViewJournalComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router params event
    this.activatedRoute.params.subscribe((params: Params) => {
        let journalId = params['id'];
        //TODO: Make service call to retrieve pdf
        console.log(journalId);
      });
  }

}

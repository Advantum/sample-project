import { Component, OnInit , Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { JournalService } from '../../services/journal.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-view-all-journal',
  templateUrl: './view-all-journal.component.html',
  styleUrls: ['./view-all-journal.component.css'],
  providers: [JournalService]
})

@Injectable()
export class ViewAllJournalComponent implements OnInit {
  //journals = [];
  //  subscribe = true;

    journals = [
      {
        "id": 1,
        "name": "test file",
        "description": "This is the desciption",
        "user":{
          "firstname" : "Mary",
          "lastname" : "Clarke"
        },
        "subscription" : true
      },
      {
        "id": 2,
        "name": "test file2",
        "description": "This is the desciption2",
        "user":{
          "firstname" : "Mark",
          "lastname" : "Kent"
        },
        "subscription" : false

      },
      {
        "id": 3,
        "name": "test file3",
        "description": "This is the desciption3",
        "user":{
          "firstname" : "Mary",
          "lastname" : "Brown",
        },
        "subscription" : true
      }
    ];


constructor (private journalService: JournalService) {}

  ngOnInit() {
    //Retrieve all Journals
      // this.journalService.getAllJournals()
      //   .subscribe(alljournals => {
      //     this.journals = alljournals;
      //   },
      //     err => {
      //       console.log("An error occured");
      //     });
      }

    // subscribed(){
    //   this.subscribe = !this.subscribe;
    //
    // }
}

import { Component, OnInit , Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { JournalService } from '../../services/journal.service';


@Component({
  selector: 'app-view-all-journal',
  templateUrl: './view-all-journal.component.html',
  styleUrls: ['./view-all-journal.component.css'],
  providers: [JournalService]
})

@Injectable()
export class ViewAllJournalComponent implements OnInit {
  //journals = [];
    journals = [
      {
        "id": 1,
        "name": "test file",
        "description": "This is the desciption"
      },
      {
        "id": 2,
        "name": "test file",
        "description": "This is the desciption"
      }
    ];


constructor (private journalService: JournalService) {}

  ngOnInit() {
    //Retrieve all Journals
      // this.journalService.getAllJournals()
      //   .subscribe(alljournals => this.journals = alljournals);
      //     console.log("Journals", this.journals);
      }

}

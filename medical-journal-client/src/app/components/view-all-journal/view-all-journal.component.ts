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
  journals = [];

constructor (private journalService: JournalService) {}

  ngOnInit() {
    //Retrieve all Journals
      this.journalService.getAllJournals()
        .subscribe(alljournals => this.journals = alljournals);
          console.log("Journals", this.journals);
      }

}

import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Journal } from '../../models/journal';
import { JournalService } from '../../services/journal.service';


// // const URL = '/api/';
// const URL = 'http://localhost:4200/upload-journal/assets/journals';

@Component({
  selector: 'app-upload-journal',
  templateUrl: './upload-journal.component.html',
  styleUrls: ['./upload-journal.component.css']
})
export class UploadJournalComponent implements OnInit {

    public newJournalEntry = new Journal();
  // public uploader:FileUploader = new FileUploader({url: URL});
  //   public hasBaseDropZoneOver:boolean = false;
  //   public hasAnotherDropZoneOver:boolean = false;

  //   public fileOverBase(e:any):void {
  //     this.hasBaseDropZoneOver = e;
  //   }

  //   public fileOverAnother(e:any):void {
  //     this.hasAnotherDropZoneOver = e;
  //   }
  constructor(private journalService: JournalService) { }

  ngOnInit() {

  }

  fileChange(event) {
    
    let files = event.target.files;
    if (files.length > 0) {
      this.newJournalEntry.file = files[0];     
    }
    console.log(this.newJournalEntry);
    this.journalService.saveJournal(this.newJournalEntry).subscribe(data =>{
      console.log(data);
    }, err => {
      console.log(err);
  });
  }

}

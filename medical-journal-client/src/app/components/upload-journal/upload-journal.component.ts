import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Journal } from '../../models/journal';
import { JournalService } from '../../services/journal.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-upload-journal',
  templateUrl: './upload-journal.component.html',
  styleUrls: ['./upload-journal.component.css']
})
export class UploadJournalComponent implements OnInit {

    public newJournalEntry = new Journal();
    hasPermission: boolean;
  
  constructor(private journalService: JournalService, private userService: UserService) { }

  ngOnInit() {
    const user = this.userService.getLocalValues();
    if(user.userRole == 'Publisher'){
      this.hasPermission = true;
    }else{
      this.hasPermission = false;
    }
  }

  fileChange(event) {
    let files = event.target.files;
    if (files.length > 0) {
      this.newJournalEntry.file = files[0];     
    }
    console.log(this.newJournalEntry);
  }

  upload(){
    this.journalService.saveJournal(this.newJournalEntry).subscribe(data =>{
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}

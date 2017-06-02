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
  
  constructor(private journalService: JournalService, private userService: UserService) { }

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

  hasPermission(){
    const user = this.userService.getLocalValues();
    if(user.userRole == 'Publisher'){
      return true;
    }else{
      return false;
    }
  }

}

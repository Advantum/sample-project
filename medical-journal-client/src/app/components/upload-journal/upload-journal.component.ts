import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Journal } from '../../models/journal';
import { JournalService } from '../../services/journal.service';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-upload-journal',
  templateUrl: './upload-journal.component.html',
  styleUrls: ['./upload-journal.component.css']
})
export class UploadJournalComponent implements OnInit {

    public newJournalEntry = new Journal();
    hasPermission: boolean;
  
  constructor(private journalService: JournalService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    const user = this.userService.getLocalValues();
    console.log(user.userRole)
    if(user.userRole === "Publisher"){
      console.log("in");
      this.hasPermission = true;
    }else{
      this.hasPermission = false;
    }
    console.log(this.hasPermission);
  }

  fileChange(event) {
    let files = event.target.files;
    if (files.length > 0) {
      this.newJournalEntry.file = files[0];     
    }
    console.log(this.newJournalEntry);
  }

  upload(){
     var formData = new FormData();
    formData.append('name', this.newJournalEntry.name);
    formData.append('description', this.newJournalEntry.description);
    formData.append('file', this.newJournalEntry.file);
    this.journalService.saveJournal(formData).subscribe(data =>{
      this.router.navigate(['/view-all-journal']);
    }, err => {
      console.log(err);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Journal } from '../../models/journal';
import { JournalService } from '../../services/journal.service';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-upload-journal',
  templateUrl: './upload-journal.component.html',
  styleUrls: ['./upload-journal.component.css']
})
export class UploadJournalComponent implements OnInit {

    public uploadForm: FormGroup;
    hasPermission: boolean;
    user: any;
    uploadedFile: any;

  constructor(private journalService: JournalService, private userService: UserService, private router: Router, private _fb: FormBuilder) { }

  ngOnInit() {
    this.uploadForm = this._fb.group({
            name: ['', [Validators.required]],
            description: ['', [Validators.required]]
        });

    this.user = this.userService.getLocalValues();
    if(this.user.userRole === "Publisher"){
      this.hasPermission = true;
    }else{
      this.hasPermission = false;
      this.router.navigate(['/view-all-journal']);
    }
  }

  fileChange(event) {
    let files = event.target.files;
    if (files.length > 0) {
      this.uploadedFile = files[0];
    }
  }

  upload(){
     var formData = new FormData();
    formData.append('name', this.uploadForm.value.name);
    formData.append('description', this.uploadForm.value.description);
    formData.append('file', this.uploadedFile);
    formData.append('userId', this.user.userId);
    this.journalService.saveJournal(formData).subscribe(data =>{
      this.router.navigate(['/view-all-journal']);
    }, err => {
      console.log(err);
    });
  }

}

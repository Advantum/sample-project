import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-journal',
  templateUrl: './view-all-journal.component.html',
  styleUrls: ['./view-all-journal.component.css']
})
export class ViewAllJournalComponent implements OnInit {

  journals = [
  {
    "Name": "Jane Doe",
    "Description": "Diabetes is dangerous",
    "FileUrl": "/fileupload/Diabetes.pdf",
    "Publisher": "Jane Doe",
    "DatePublished": "May 10,2017"
  },
  {
    "Name": "Jane Doe",
    "Description": "Cancer is critical",
    "FileUrl": "/fileupload/Diabetes.pdf",
    "Publisher": "Jane Doe",
    "DatePublished": "February 1,2017"
  },
  {
    "Name": "Rick Doe",
    "Description": "Diabetes is dangerous",
    "FileUrl": "/fileupload/Diabetes.pdf",
    "Publisher": "Jane Doe",
    "DatePublished": "January 1,2017"
  },
  {
    "Name": "Mary Doe",
    "Description": "Jane Doe",
    "FileUrl": "/fileupload/Diabetes.pdf",
    "Publisher": "Jane Doe",
    "DatePublished": "May 1,2016"
  }
 ];
  constructor() {

  }

  ngOnInit() {
  }

}

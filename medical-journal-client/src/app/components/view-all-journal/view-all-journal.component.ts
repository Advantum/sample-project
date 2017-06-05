import { Component, OnInit , Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { JournalService } from '../../services/journal.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../../services/user.service';



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
  mockUser = [{
         "id": 1,
         "firstname": "Tim",
         "lastname": "Doe",
         "subscriptions": [ 2, 1 , 0]
       }];
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


constructor (private journalService: JournalService, private userService: UserService ) {}

  ngOnInit() {

    // this.journals.forEach(function(journal) {
    //     console.log(journal);
    //     console.log(this.mockUser);
    //
    //     // for (let i = 0; i < this.tempUser.subscriptions.length; i++) {
    //     //     if(this.tempUser.subscriptions[i]==journal.id){
    //     //       journal.subscription = true;
    //     //       console.log("Journal found: "+ this.tempUser.subscriptions[i] );
    //     //     }
    //     // }
    // });

    for (var journal in this.journals) // for acts as a foreach
        {
            // console.log(this.journals[journal]);

            for (var subscription in this.mockUser[0].subscriptions) {
              console.log("journal:", this.journals[journal].id);
              console.log("subscription:", subscription)
              // if(this.journals[journal].id == subscription){
              //   journal.subscription = true;
              //   console.log("Journal found: "+ subscription );
              // }
            }// for acts as a foreach

        }
            // for (let i = 0; i < this.mockUser[0].subscriptions.length; i++) {
            //        if(this.mockUser[0].subscriptions[i]==journal.id){
            //          journal.subscription = true;
            //          console.log("Journal found: "+ this.mockUser[0].subscriptions[i] );
            //        }
            //    }

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

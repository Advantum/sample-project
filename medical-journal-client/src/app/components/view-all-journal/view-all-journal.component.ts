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
  providers: [JournalService, UserService]
})

@Injectable()
export class ViewAllJournalComponent implements OnInit {
  journals = [];

/***** MOCK DATA *********/
//  subscribe = true;
  mockUser = [{
         "id": 1,
         "firstname": "Tim",
         "lastname": "Doe",
         "subscriptions": [ "Diabetes", 1 , 8]
       }];



constructor (private journalService: JournalService, private userService: UserService ) {}

  ngOnInit() {

    //Map Journals to show which Journals the User Subscibe to.
    //Retrieve all Journals
      this.journalService.getAllJournals()
        .subscribe(alljournals => {
          this.journals = alljournals;

          for (var journal in this.journals) // for acts as a foreach
           {
               this.journals[journal].subscription = false; //Default

               //Check if Journals contains the User Journal
               if(this.mockUser[0].subscriptions.indexOf(this.journals[journal].id)!== -1){
                 console.log("Found:" + this.journals[journal].id);

                 this.journals[journal].subscription = true;

               }// for acts as a foreach

           }
        },
          err => {
            console.log("An error occured");
          });
      }

    subscribe(event, subscription){

      console.log("Subscription: ", subscription);

      if(subscription.subscription){
        alert("UnSubcribed");
        //post to update user with journal
      }else{
        //post to remove journal from the list
        alert("Subcribed")

      }

      for (var journal in this.journals) // for acts as a foreach
        {

            if(this.journals[journal].id ==subscription.id){
              this.journals[journal].subscription = subscription.subscription; //Default
              console.log("Update Journal" + subscription.id);
            }

        }
    }
}

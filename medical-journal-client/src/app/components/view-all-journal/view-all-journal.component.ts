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
  user: any;
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
    this.user = this.userService.getLocalValues();

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
        //post to update user with journal
        alert("UnSubcribed");
        this.mockUser[0].subscriptions.push(subscription.id);

      }else{
        //post to remove journal from the list
        var index = this.mockUser[0].subscriptions.indexOf(subscription.id);
        if(index > -1){
            this.mockUser[0].subscriptions.splice(index, 1);
        }
        alert("Subcribed");


        this.updateUserJournals(this.mockUser);
        }
      }
      /**** Update Server Side **********/

      // for (var journal in this.journals) // for acts as a foreach
      //   {
      //
      //       if(this.journals[journal].id ==subscription.id){
      //         this.journals[journal].subscription = subscription.subscription; //Default
      //         console.log("Update Journal" + subscription.id);
      //       }
      //
      //   }
    updateUserJournals(user){
      console.log("User To Update", this.mockUser);

      //this.userService.updateUserJournals(this.mockUser).subscribe(data =>{
      //   console.log(data);
      // }

    }

}

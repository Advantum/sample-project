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
  userInfo: any;
  journals = [];

/***** MOCK DATA *********/
//  subscribe = true;
  // mockUser = [{
  //        "id": 1,
  //        "firstname": "Tim",
  //        "lastname": "Doe",
  //        "subscriptions": [ "Diabetes", 1 , 8]
  //      }];


constructor (private journalService: JournalService, private userService: UserService ) {}

  ngOnInit() {
    this.user = this.userService.getLocalValues();
    console.log("User", this.user);

    //Retrieve UserInfo to display journals subscribe to
    this.userInfo = this.getUser(this.user.userId);
    console.log("UserInfo", this.userInfo);

    //Retrieve all Journals
      this.journalService.getAllJournals()
        .subscribe(alljournals => {
          this.journals = alljournals;

          //Map Journals to show which Journals the User Subscibe to.
          for (var journal in this.journals) // for acts as a foreach
           {
               this.journals[journal].subscription = false; //Default

               if(this.userInfo.subscriptions){
                   //Check if Journals contains the User Journal
                   if(this.userInfo.subscriptions.indexOf(this.journals[journal].id)!== -1){
                     console.log("Found:" + this.journals[journal].id);

                     this.journals[journal].subscription = true;

                   }
               }
           }
        },
          err => {
            console.log("An error occured");
          });
      }

    //When user click Subscribe Button
    subscribe(event, subscription){

      console.log("Subscription: ", subscription);

      if(subscription.subscription){
        //post to update user with journal
        alert("UnSubcribed");
        this.userInfo.subscriptions.push(subscription.id);

      }else{
        //post to remove journal from the list
        if(this.userInfo.subscriptions){
          var index = this.userInfo.subscriptions.indexOf(subscription.id);
        }
        if(index > -1){
            this.userInfo.subscriptions.splice(index, 1);
        }
        alert("Subcribed");


        this.updateUserJournals(this.userInfo);
        }
      }

  /**** Update Server Side **********/
    updateUserJournals(user){
      console.log("User To Update", user);

      this.userService.updateUserJournals(user).subscribe(data =>{
        console.log("Updated?", data);
      },
        err => {
          console.log("An error occured updating user");
        });

    }
    getUser(id){
      return this.userService.getUser(id).subscribe(data =>{
        console.log("User Data:", data);
      },
        err => {
          console.log("An error occured");
        });
    }

}

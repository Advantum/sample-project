import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public newUser = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.newUser.email= "x@x.com";
    this.newUser.firstname= "Gavin";
    this.newUser.lastname="Price";
    this.newUser.password="test";
    this.newUser.id=3;
  }
  //This function grabs the newUser model from the form and submits 
  //it to the service and handles the response displayed on the view.
  registerUser() {
    //TODO: Validate the inputs
    this.userService.getUserByEmail(this.newUser).subscribe(data =>{
      console.log(data.present);
      console.log(this.newUser);
      if(!data.present){
          // this.userService.registerUser(this.newUser).subscribe(data =>{
          //   if(data){
          //     this.router.navigate(['/login']);
          //   }else{
          //     console.log("failed");
          //   }
          // });
      }else{
        console.log("User Already Exists");
      }
    });
  }
}


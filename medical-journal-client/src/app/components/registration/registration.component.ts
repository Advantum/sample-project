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
  errorMessage: String;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.newUser.id=3;
    this.errorMessage = "";
  }
  //This function grabs the newUser model from the form and submits 
  //it to the service and handles the response displayed on the view.
  registerUser() {
    //TODO: Validate the inputs
    this.errorMessage = "";
    this.userService.getUserByEmail(this.newUser).subscribe(data =>{
      if(!data){
          this.userService.registerUser(this.newUser).subscribe(data =>{
            if(data){
              this.router.navigate(['/login']);
            }else{
              this.errorMessage = "An Error Occured";
            }
          });
      }else{
        this.errorMessage = "User Already Exists";
      }
    });
  }
}


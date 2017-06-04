import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  errorMessage: String;
  public registrationForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private _fb: FormBuilder) { }

  ngOnInit() {
    this.errorMessage = "";
    this.registrationForm = this._fb.group({
            firstname: ['', [Validators.required, Validators.minLength(5)]],
            lastname: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
            role: ['', [Validators.required]]
        });
  }
  //This function grabs the newUser model from the form and submits 
  //it to the service and handles the response displayed on the view.
  registerUser() {
    //TODO: Validate the inputs
    this.errorMessage = "";
      this.userService.registerUser(this.registrationForm.value).subscribe(data =>{
        if(data){
          this.router.navigate(['/login']);
        }
      }, err => {
        if(err){
          console.log(err);
          this.errorMessage = "User already exists!";
        }
    });
  }
}


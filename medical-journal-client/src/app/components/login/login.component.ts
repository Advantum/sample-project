import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: String;
  password: String;
  errorMessage: String;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.errorMessage = "";
  }

  onLogin(){
    const user = {
      email: this.email,
      password: this.password
    }
    this.errorMessage = "";
    this.userService.authenticateUser(JSON.stringify(user)).subscribe(data =>{
      if(data){
        localStorage.setItem('user', JSON.stringify(data.id));
        localStorage.setItem('role', JSON.stringify(data.role));
        this.router.navigate(['/']);
      }
    },
    err => {
      if(err){
        this.errorMessage = err.statusText;
      }
    }
    );
  }

  onLogout(){
    localStorage.clear();
  }


}

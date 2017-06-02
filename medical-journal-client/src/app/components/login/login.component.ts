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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    const user = {
      email: this.email,
      password: this.password
    }
    this.userService.authenticateUser(user).subscribe(data =>{
      console.log(data);
      //localStorage.setItem('user', JSON.stringify(data.id));
      //localStorage.setItem('role', JSON.stringify(data.role));
    });
  }

  onLogout(){
    localStorage.clear();
  }


}

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  user: any;


  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4200/api/registration', user, {headers: headers})
    .map(res => res.json());
  }

  getUserByEmail(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:4200/api/user/' + user['email'], {headers: headers})
    .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4200/api/login', user, {headers: headers})
    .map(res => res.json());
  }
  //This gets the logal storage information and returns a authUSer object
  getLocalValues(){
    const id = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    const authUser = {
      userId : id,
      userRole : role
    }
    return authUser;
  }
  
//Function checks local storage if user logged in
  isLoggedIn(){
    let user = this.getLocalValues();
    if(user.userId && user.userRole){
      return true;
    }else{
      return false;
    }
  }

  isPublisher(){
    let user = this.getLocalValues();
    if(user.userRole == "Publisher"){
      return true;
    }else{
      return false;
    }
  }
}

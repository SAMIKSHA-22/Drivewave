import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public setToken(token:any) {
    if (token != null) {
      localStorage.setItem('token',token);
    }
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public removeToken() {
    var token = localStorage.getItem('token');
    if (token != null) {
      localStorage.removeItem('token');
    }
  }

  public setUser(user:any) {
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser() {
    var _user = localStorage.getItem('user');
    if (_user != null) {
      var user = JSON.parse(_user);
      return user;
    } else {
      return null;
    }
  }

  public removeuser(){
    var user = localStorage.getItem('user')
    if (user != null) {
      localStorage.removeItem('user');
    }
  }

  public getRole() {
    var user = localStorage.getItem('user')
    if (user != null) {
      var object = JSON.parse(user);
      return object.role;
    }
  }

  public getLoginStatus() {
    var user = localStorage.getItem('user')
    var status = user != null ? true : false;
    return status;
  }

  public logOut() {
    var user = localStorage.getItem('user')
    if (user != null) {
      
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }
  
}

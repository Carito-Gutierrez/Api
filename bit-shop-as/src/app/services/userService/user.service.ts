import { Injectable } from '@angular/core';
import { User } from '../../models/userModel'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  slectedUser: User
  //url_api = 'http://localhost:5000/api/user'
  url_api = `${environment.API_URL}/user`

  constructor(public http: HttpClient) {
    this.slectedUser = new User
  }

  // conexion para login
  /*
  credentials = {
    email: "",
    password: "",
  }
  */

  login(credentials: any){
    return this.http.post(`${this.url_api}/login`, credentials)
  }

  /*
  formUser = {
    email: "",
    password: "",
    phone: "",
    username: ""
  }
  */
  register(formUser: any){
    return this.http.post(`${this.url_api}/create-user`, formUser)
  }


}
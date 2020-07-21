import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http: HttpClient) { }

  newUser(newUser){
    return this.http.post("https://testapi.jarpiscloud.nl/api/v1/users", newUser);
  }
}

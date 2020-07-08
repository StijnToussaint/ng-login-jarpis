import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials){
    return this.http.post(
      "https://testapi.jarpiscloud.nl/api/v1/auth/login",
      credentials
    )
  }
}

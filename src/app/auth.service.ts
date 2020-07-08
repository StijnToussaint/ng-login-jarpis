import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials){
    return this.http.post("https://testapi.jarpiscloud.nl/api/v1/auth/login",
      credentials).pipe(
      catchError(val => of(false)),
      map(response => {
        let result = response;
        if(result && result["token"]){
          //Save in local
          localStorage.setItem("token", result["token"]);
          return true;
        }
      }));
  }

  logout(){
    localStorage.removeItem("token");
  }
}

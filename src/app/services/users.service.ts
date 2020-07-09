import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 
  }

  getUsers(offset, limit){
    // ??
    // let params1 = new HttpParams;
    // params1.set("offset", offset);
    // params1.set("limit", limit);
    return this.http.get("https://testapi.jarpiscloud.nl/api/v1/users?offset="+offset+"&limit="+limit);
  }

  getUsersById(id){
    return this.http.get("https://testapi.jarpiscloud.nl/api/v1/users/"+id);
  }
}

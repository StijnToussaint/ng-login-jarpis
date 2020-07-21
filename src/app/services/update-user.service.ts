import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private http: HttpClient) { }

  updateUser(id, newUser){
    // ??
    // let params1 = new HttpParams;
    // params1.set("offset", offset);
    // params1.set("limit", limit);
    return this.http.put("https://testapi.jarpiscloud.nl/api/v1/users/"+id,newUser);
  }
}

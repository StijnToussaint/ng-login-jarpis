import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(private http: HttpClient) { }

  delete(id){

    return this.http.delete("https://testapi.jarpiscloud.nl/api/v1/users/"+id);
  }
}

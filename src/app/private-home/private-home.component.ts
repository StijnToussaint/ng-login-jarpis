import { Router } from '@angular/router';
import { UsersService } from './../services/users.service';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.scss']
})
export class PrivateHomeComponent implements OnInit {
  authService;
  users;
  startIndex = 0;
  endIndex = 10;
  constructor(private _authService: AuthService, private usersService: UsersService, private router: Router) { 
    this.authService = _authService;
  }

  ngOnInit(): void {
    this.usersService.getUsers(0,200).subscribe(
      result => {
        this.users = result["data"];
      }
    );
  }

  newUser(){
    this.router.navigateByUrl("private-home/new-user");
  }

  getArrayFromNumber(length){
    return new Array(Math.ceil(length/10));
  }

  updateIndex(pageIndex){
    this.startIndex = pageIndex * 10;
    this.endIndex = this.startIndex + 10;
    window.scrollTo(0, 0);
  }

}

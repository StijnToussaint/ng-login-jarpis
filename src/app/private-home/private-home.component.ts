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

}

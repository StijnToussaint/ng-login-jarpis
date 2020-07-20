import { Observable } from 'rxjs';
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
  users$;
  usersLength;
  startIndex = 0;
  endIndex = 10;
  currentPage = 0;
  totalPages;
  constructor(private _authService: AuthService, private usersService: UsersService, private router: Router) { 
    this.authService = _authService;
  }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers(0,200);
  }

  newUser(){
    this.router.navigateByUrl("private-home/new-user");
  }

  getArrayFromNumber(length){
    this.totalPages = Math.ceil(length/10);
    return new Array(this.totalPages);
  }

  updateIndex(pageIndex){
    this.startIndex = pageIndex * 10;
    this.endIndex = this.startIndex + 10;
    this.currentPage = this.startIndex / 10;
    window.scrollTo(0, 0);
  }

  previousPage(){
    if(this.currentPage > 0){
      this.updateIndex(this.currentPage - 1);
    }
  }

  nextPage(){
    if(this.currentPage < this.totalPages - 1){
      this.updateIndex(this.currentPage + 1);
    }
  }

}

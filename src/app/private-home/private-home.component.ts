import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from './../services/users.service';
import { AuthService } from '../services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';

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
  endIndex = 9;
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
    this.totalPages = Math.ceil(length/9);
    return new Array(this.totalPages);
  }

  updateIndex(pageIndex){
    this.startIndex = pageIndex * 9;
    this.endIndex = this.startIndex + 9;
    this.currentPage = this.startIndex / 9;
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

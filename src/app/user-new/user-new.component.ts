import { NewUserService } from './../services/new-user.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  firstName = new FormControl("");
  lastName = new FormControl("");
  email = new FormControl("");
  password = new FormControl("");
  avatar = new FormControl("");
  invalidUser;

  constructor(private router: Router, private newUserService: NewUserService) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl("private-home");
  }

  newUser(){
    let newUser = {
      "avatar":this.avatar.value,
      "email":this.email.value,
      "firstName":this.firstName.value,
      "lastName":this.lastName.value,
      "password":this.password.value
    }
    this.newUserService.newUser(newUser).subscribe(
      result => {
        if(result){
          this.router.navigate(['private-home']);
        }else{
          this.invalidUser = true;
        }
      }
    );
  }

}

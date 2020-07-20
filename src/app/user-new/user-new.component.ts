import { NewUserService } from './../services/new-user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {
  newUserForm = new FormGroup({
    firstName : new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastName : new FormControl("", [Validators.required, Validators.minLength(2)]),
    email : new FormControl("", [Validators.required, Validators.email]),
    password : new FormControl("", [Validators.required, Validators.minLength(2)]),
    avatar : new FormControl("", [Validators.required, Validators.minLength(2)]),
  })
  invalidUser;

  constructor(private router: Router, private newUserService: NewUserService) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl("private-home");
  }

  newUser(){
    let newUser = {
      "avatar" : this.newUserForm.get('avatar'),
      "email" : this.newUserForm.get('email'),
      "firstName" : this.newUserForm.get('firstName'),
      "lastName" : this.newUserForm.get('lastName'),
      "password" : this.newUserForm.get('password')
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

  get avatar(){
    return this.newUserForm.get('avatar');
  }
  get email(){
    return this.newUserForm.get('email');
  }
  get firstName(){
    return this.newUserForm.get('firstName');
  }
  get lastName(){
    return this.newUserForm.get('lastName');
  }
  get password(){
    return this.newUserForm.get('password');
  }

}

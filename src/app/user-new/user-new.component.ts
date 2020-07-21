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
  //All regex used in this formgroup are plucked from the internet:
  //password : https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  //avatar link : https://mathiasbynens.be/demo/url-regex
  newUserForm = new FormGroup({
    firstName : new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastName : new FormControl("", [Validators.required, Validators.minLength(2)]),
    email : new FormControl("", [Validators.required, Validators.email]),
    password : new FormControl("", [Validators.required, Validators.minLength(4), 
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{4,}$")]),
    avatar : new FormControl("", [Validators.required, Validators.minLength(2),
      Validators.pattern("^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x00a1-\xffff0-9]+-?)*[a-z\x00a1-\xffff0-9]+)(?:\.(?:[a-z\x00a1-\xffff0-9]+-?)*[a-z\x00a1-\xffff0-9]+)*(?:\.(?:[a-z\x00a1-\xffff]{2,})))(?::\d{2,5})?(?:/[^\s]*)?$")]),
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
      "avatar" : this.newUserForm.get('avatar').value,
      "email" : this.newUserForm.get('email').value,
      "firstName" : this.newUserForm.get('firstName').value,
      "lastName" : this.newUserForm.get('lastName').value,
      "password" : this.newUserForm.get('password').value
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

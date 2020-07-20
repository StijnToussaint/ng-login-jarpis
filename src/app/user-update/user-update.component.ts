import { UpdateUserService } from './../services/update-user.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  user;
  id;
  //All regex used in this formgroup are plucked from the internet:
  //password : https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  //avatar link : https://mathiasbynens.be/demo/url-regex
  updateUserForm = new FormGroup({
    firstName : new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastName : new FormControl("", [Validators.required, Validators.minLength(2)]),
    email : new FormControl("", [Validators.required, Validators.email]),
    password : new FormControl("", [Validators.required, Validators.minLength(4), 
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{4,}$")]),
    avatar : new FormControl("", [Validators.required, Validators.minLength(2),
      Validators.pattern("^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x00a1-\xffff0-9]+-?)*[a-z\x00a1-\xffff0-9]+)(?:\.(?:[a-z\x00a1-\xffff0-9]+-?)*[a-z\x00a1-\xffff0-9]+)*(?:\.(?:[a-z\x00a1-\xffff]{2,})))(?::\d{2,5})?(?:/[^\s]*)?$")]),
  })
  invalidUpdate;

  constructor(private route: ActivatedRoute, private usersService: UsersService, 
    private router: Router, private updateUserService: UpdateUserService) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.usersService.getUsersById(this.id).subscribe(
      result => {
        this.user = result;
        this.updateUserForm.setValue({
          firstName:this.user["firstName"],
          lastName:this.user["lastName"],
          email:this.user["email"],
          password:this.user["password"],
          avatar:this.user["avatar"]
        });
      }
    );
  }

  back(){
    this.router.navigateByUrl("private-home/"+this.id);
  }

  update(){
    let newUser = {
      "avatar":this.updateUserForm.get("avatar").value,
      "email":this.updateUserForm.get("email").value,
      "firstName":this.updateUserForm.get("firstName").value,
      "lastName":this.updateUserForm.get("lastName").value,
      "password":this.updateUserForm.get("password").value
    }
    this.updateUserService.updateUser(this.id,newUser).subscribe(
      result => {
        if(result){
          this.router.navigate(['private-home/'+this.id]);
        }else{
          this.invalidUpdate = true;
        }
      }
    );
  }

  get avatar(){
    return this.updateUserForm.get('avatar');
  }
  get email(){
    return this.updateUserForm.get('email');
  }
  get firstName(){
    return this.updateUserForm.get('firstName');
  }
  get lastName(){
    return this.updateUserForm.get('lastName');
  }
  get password(){
    return this.updateUserForm.get('password');
  }

}

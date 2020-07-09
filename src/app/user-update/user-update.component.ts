import { UpdateUserService } from './../services/update-user.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  user;
  id;
  firstName = new FormControl("");
  lastName = new FormControl("");
  email = new FormControl("");
  password = new FormControl("");
  avatar = new FormControl("");
  invalidUpdate;

  constructor(private route: ActivatedRoute, private usersService: UsersService, 
    private router: Router, private updateUserService: UpdateUserService) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.usersService.getUsers(this.id - 1,1).subscribe(
      result => {
        this.user = result["data"][0];
        this.firstName.setValue(this.user["firstName"]);
        this.lastName.setValue(this.user["lastName"]);
        this.email.setValue(this.user["email"]);
        this.password.setValue(this.user["password"]);
        this.avatar.setValue(this.user["avatar"]);
      }
    );
  }

  back(){
    this.router.navigateByUrl("private-home/"+this.id);
  }

  update(){
    let newUser = {
      "avatar":this.avatar.value,
      "email":this.email.value,
      "firstName":this.firstName.value,
      "lastName":this.lastName.value,
      "password":this.password.value
    }
    console.log("update");
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

}

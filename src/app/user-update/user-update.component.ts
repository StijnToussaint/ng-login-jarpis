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


  constructor(private route: ActivatedRoute, private usersService: UsersService, private router: Router) { 
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
    //Pass info to service
  }

}

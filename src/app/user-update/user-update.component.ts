import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  user;
  id;
  constructor(private route: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"] - 1;
    this.usersService.getUsers(this.id,1).subscribe(
      result => {
        this.user = result["data"][0];
      }
    );
  }

  back(){
    this.router.navigateByUrl("private-home/"+this.route.snapshot.params["id"]);
  }

}

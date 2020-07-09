import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user;
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"] - 1;
    this.usersService.getUsers(id,1).subscribe(
      result => {
        this.user = result["data"][0];
      }
    );
  }

  back(){
    this.router.navigateByUrl("private-home");
  }

}

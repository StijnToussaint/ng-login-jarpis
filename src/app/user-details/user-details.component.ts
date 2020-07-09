import { DeleteUserService } from './../services/delete-user.service';
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
  invalidDelete;
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router, private deleteUserService: DeleteUserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usersService.getUsersById(id).subscribe(
      result => {
        this.user = result;
      }
    );
  }

  back(){
    this.router.navigateByUrl("private-home");
  }

  delete(){
    this.deleteUserService.delete(this.route.snapshot.params["id"]).subscribe(
      result => {
        this.router.navigate(['private-home']);
      }
    );
  }

}

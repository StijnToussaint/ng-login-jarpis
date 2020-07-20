import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
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
  user$ : Observable<any>;
  invalidDelete;
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router, 
    private deleteUserService: DeleteUserService, private dialog: MatDialog) {
     }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.user$ = this.usersService.getUsersById(id)
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

  openDialog(firstName){
    this.dialog.open(ConfirmDialogComponent, {
      data: { name: firstName },
    }).afterClosed().subscribe(
      result => {
        if(result){
          this.delete();
        }
      }
    );
  }
  

}

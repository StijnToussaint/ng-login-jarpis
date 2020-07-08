import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private routerModule: RouterModule) { }

  ngOnInit(): void {
  }

  signIn(credentials){
    this.authService.login(credentials).subscribe(
      result => {
        console.log(result);   
      }
    );
  }

}

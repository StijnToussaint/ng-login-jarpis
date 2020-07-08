import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  signIn(credentials){
    this.authService.login(credentials).subscribe(
      result => {
        if(result){
          this.route.navigate(['private-home']);
        }else{
          this.invalidLogin = true;
        }
      }
    );
  }

}

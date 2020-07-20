import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-login-jarpis';
  authService;
  avatarClicked = false;

  constructor(private authService_: AuthService) {
    this.authService = authService_;
  }

}

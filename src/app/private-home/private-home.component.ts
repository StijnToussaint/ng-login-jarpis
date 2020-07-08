import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.scss']
})
export class PrivateHomeComponent implements OnInit {
  authService;
  constructor(private _authService: AuthService) { 
    this.authService = _authService;
  }

  ngOnInit(): void {
  }

}

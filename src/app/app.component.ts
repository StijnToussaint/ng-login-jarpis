import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-login-jarpis';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/users')
    .subscribe(data => {
      // TODO: Do stuff with data
    });
  }
}

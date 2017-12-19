import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.login({
      'email': 'cohen-selmon@osmos-group.com',
      'password': 'Osmos2014'
    }).then(() => {
      console.log(AuthService.getUser());
    }).catch(() => {

    });
  }

}

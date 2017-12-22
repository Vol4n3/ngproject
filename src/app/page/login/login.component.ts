import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {
  }

  submitForm(form: HTMLFormElement): boolean {
    this.auth.connect({
      'email': form['email'].value,
      'password': form['password'].value
    }).then(() => {
      this.router.navigateByUrl('/home');
    }).catch(() => {
    });
    return false;
  }

  ngOnInit() {
    if (this.auth.logged) {
      this.router.navigateByUrl('/home');
    }
  }

}

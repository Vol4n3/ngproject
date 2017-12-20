import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth/auth.service';
import {TranslateService} from '@ngx-translate/core';
import {NavigationStart, Router} from '@angular/router';
import {LanguageService} from './service/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  public language = LanguageService;

  constructor(public auth: AuthService,
              public translate: TranslateService,
              private router: Router) {
    /**
     * https://github.com/ngx-translate/core
     */
    translate.setDefaultLang('en');
    translate.addLangs(['fr']);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|es|it/) ? browserLang : 'en');
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationStart) {
        if (AuthService.isPageNeedAuth(ev.url)) {
          this.checkAuth();
        }
      }
    });
  }

  public logout() {
    this.auth.removeSession().then(() => {
      this.router.navigateByUrl('/login');
    }).catch(() => {
    });
  }

  private checkAuth() {
    this.auth.isLogged().then(() => {
    }).catch(() => {
      this.router.navigateByUrl('/login');
    });
  }

  ngOnInit(): void {

  }

}

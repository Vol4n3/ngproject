import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService, public translate: TranslateService) {

    /**
     * https://github.com/ngx-translate/core
     */
    translate.setDefaultLang('en');
    translate.addLangs(['fr']);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|es|it/) ? browserLang : 'en');
  }

  public getLanguageName(lang: string): string {
    switch (lang) {
      case 'en' :
        return 'English';
      case 'fr' :
        return 'Français';
      default:
        return lang;
    }
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

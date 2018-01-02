import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth/auth.service';
import {TranslateService} from '@ngx-translate/core';
import {NavigationStart, Router} from '@angular/router';
import {LanguageService} from './service/language/language.service';
import {ProjectService} from './service/project/project.service';
import {MatIconRegistry, MatPaginatorIntl} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService, ProjectService, MatPaginatorIntl]
})
export class AppComponent implements OnInit {
  public language = LanguageService;

  constructor(public auth: AuthService,
              public translate: TranslateService,
              private router: Router,
              private intlPaginator: MatPaginatorIntl,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    this.isStillLoginEventRegistry();
    this.importIcons();
    this.configLang();
  }

  public logout() {
    this.auth.removeSession().then(() => {
      this.router.navigateByUrl('/login');
    }).catch(() => {
    });
  }

  /**
   * https://github.com/ngx-translate/core
   */
  private configLang(): void {
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['fr']);

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|es|it/) ? browserLang : 'en');

    this.intlPaginator.itemsPerPageLabel = '';
  }

  /**
   * Icon Registry
   */
  private importIcons(): void {
    this.registryIconSvg('edit', 'alert');
  }

  private registryIconSvg(...names: string[]): void {
    for (const name of names) {
      this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/' + name + '.svg'));
    }
  }

  private isStillLoginEventRegistry(): void {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationStart) {
        if (AuthService.isPageNeedAuth(ev.url)) {
          this.checkAuth();
        }
      }
    });
  }

  private checkAuth() {
    this.auth.isLogged().then(() => {
    }).catch(() => {
      this.router.navigateByUrl('/login');
    });
  }

  ngOnInit(): void {
    this.checkAuth();
  }

}

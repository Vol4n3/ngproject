import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

interface INavMenu {
  uri: string;
  name: string;
}

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  public navMenu: INavMenu[];
  constructor() {
  }

  ngOnInit() {
    this.navMenu = [
      {
        uri: '/home',
        name: 'NAVIGATION.HOME'
      },
      {
        uri: '/projects',
        name: 'NAVIGATION.PROJECTS'
      }
    ];
  }

}

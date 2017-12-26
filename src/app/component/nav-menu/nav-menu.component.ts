import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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
  public currentPageName: string;
  constructor(public router: Router) {
  }

  getNameUri(uri: string): string {
    return this.navMenu.find((item: INavMenu) => {
      return item.uri === uri;
    }).name;
  }

  ngOnInit() {
    this.navMenu = [
      {
        uri: '/home',
        name: 'Home'
      },
      {
        uri: '/projects',
        name: 'Projects'
      }
    ];
  }

}

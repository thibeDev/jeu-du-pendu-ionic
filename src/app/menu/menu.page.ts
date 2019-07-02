import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus = [
    {
      title: 'Home',
      url: '/menu/home',
      icon:'beer'
    },
    {
      title: 'Jeu',
      url: '/menu/game',
      icon:'basketball'
    },
    {
      title: 'Dictionaire',
      url: '/menu/dictionary',
      icon:'clipboard'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMenuItem(m) {
    this.router.navigateByUrl(m.url);
  }

}

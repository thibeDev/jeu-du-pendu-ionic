import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'game/:word', loadChildren: '../game/game.module#GamePageModule' },
      { path: 'new-game/:word', loadChildren: '../new-game/new-game.module#NewGamePageModule' },
      { path: 'new-game', loadChildren: '../new-game/new-game.module#NewGamePageModule' },
      { path: 'dictionary', loadChildren: '../dictionary/dictionary.module#DictionaryPageModule' },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' },
  { path: 'new-game', loadChildren: './new-game/new-game.module#NewGamePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

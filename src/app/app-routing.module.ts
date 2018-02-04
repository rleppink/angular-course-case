import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { BrowsePageComponent } from './browse-page/browse-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';


const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'browse', component: BrowsePageComponent },
    { path: 'favorites', component: FavoritesPageComponent },
    { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

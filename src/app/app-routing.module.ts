import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './search-page/search-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';


const routes: Routes = [
    { path: 'search',    component: SearchPageComponent },
    { path: 'favorites', component: FavoritesPageComponent },
    { path: '**',        redirectTo: '/search' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

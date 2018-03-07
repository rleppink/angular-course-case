import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { FavoritesService } from '../services/favorites.service';
import { IArtObject } from '../interfaces/IArtObject';


@Component({
    selector: 'app-favorites-page',
    templateUrl: './favorites-page.component.html',
    styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

    favorites: Observable<IArtObject[]>;

    constructor(private _favoritesService: FavoritesService) {
        this.favorites = _favoritesService.getFavorites();
    }

    ngOnInit() {
    }
}

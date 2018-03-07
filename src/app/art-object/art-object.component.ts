import { Component, OnInit, Input } from '@angular/core';

import { IArtObject } from '../interfaces/IArtObject';
import { FavoritesService } from '../services/favorites.service';


@Component({
    selector: 'art-object',
    templateUrl: './art-object.component.html',
    styleUrls: ['./art-object.component.css']
})
export class ArtObjectComponent implements OnInit {

    @Input() artObject: IArtObject;


    constructor(private _favoritesService: FavoritesService) { }

    ngOnInit() {
    }

    toggleFavorite(artObject: IArtObject) {
        this._favoritesService.toggleFavoriteArtObject(artObject);
    }
}

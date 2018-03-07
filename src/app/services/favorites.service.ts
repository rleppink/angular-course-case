import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { IArtObject } from '../interfaces/IArtObject';


@Injectable()
export class FavoritesService {

    private favoritesList: IArtObject[];
    private favorites: BehaviorSubject<IArtObject[]>;

    constructor() {
        let x = localStorage.getItem("favorites");
        if (x) {
            this.favoritesList = JSON.parse(x);
        } else {
            this.favoritesList = [];
        }

        this.favorites = new BehaviorSubject(this.favoritesList);
    }

    toggleFavoriteArtObject(artObject: IArtObject) {
        if (this.favoritesList.find(x => x == artObject)) {
            this.favoritesList = this.favoritesList.filter(x => x != artObject);
        }
        else {
            this.favoritesList.push(artObject);
        }

        localStorage.setItem("favorites", JSON.stringify(this.favoritesList));
        this.favorites.next(this.favoritesList);
    }

    getFavorites(): Observable<IArtObject[]> {
        return this.favorites.asObservable();
    }
}

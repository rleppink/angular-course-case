import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IArtObject } from '../interfaces/IArtObject';
import { RijksApiService } from '../services/rijks-api.service';


@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

    artObjects: Observable<IArtObject[]>;


    constructor(private _rijksApi: RijksApiService) { }

    ngOnInit() {
    }

    onInput(input: string) {
        this.artObjects =
            this._rijksApi
                .searchAnything(input)
                .map(x => x.artObjects);

        this._rijksApi
            .searchAnything(input)
            .subscribe(x => console.log(x));
    }
}

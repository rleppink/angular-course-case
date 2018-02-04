import { Component, OnInit } from '@angular/core';

import { RijksApiService } from '../rijks-api.service';


@Component({
    selector: 'app-browse-page',
    templateUrl: './browse-page.component.html',
    styleUrls: ['./browse-page.component.css']
})
export class BrowsePageComponent implements OnInit {

    constructor(private _rijksApi: RijksApiService) { }

    ngOnInit() {
    }

    onInput(input: string) {
        this._rijksApi
            .searchAnything(input)
            .subscribe(response => console.log(response));
    }
}

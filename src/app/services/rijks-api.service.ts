import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SecretService } from './secret.service';

import { ISearchResult } from '../interfaces/isearch-result';



const rijksApiUrl: string =
    'https://www.rijksmuseum.nl/api/nl/collection';


@Injectable()
export class RijksApiService {
    readonly keyedApiUrl: string;


    constructor(private http: HttpClient, private secret: SecretService) {
        this.keyedApiUrl = `${rijksApiUrl}?key=${this.secret.getApiKey()}&imgonly=True`;
    }

    searchAnything(q: string): Observable<ISearchResult> {
        return this.http.get<ISearchResult>(`${this.keyedApiUrl}&q=${q}`);
    }
}

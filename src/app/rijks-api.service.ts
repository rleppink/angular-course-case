import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SecretService } from './secret.service';


const rijksApiUrl: string =
    'https://www.rijksmuseum.nl/api/nl/collection';


@Injectable()
export class RijksApiService {
    readonly keyedApiUrl: string;


    constructor(private http: HttpClient, private secret: SecretService) {
        this.keyedApiUrl = `${rijksApiUrl}?key=${this.secret.getApiKey()}&imgonly=True`;
    }

    searchAnything(q: string): Observable<any> {
        return this.http.get(`${this.keyedApiUrl}&q=${q}`);
    }
}

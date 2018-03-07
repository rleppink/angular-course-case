import { Injectable } from '@angular/core';

@Injectable()
export class SecretService {
    getApiKey(): string { return '<your-api-key>'; }
}

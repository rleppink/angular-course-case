import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    template: `
<h2>RijksAPIcatie</h2>

<nav>
    <a routerLink="">Home</a>
    <a routerLink="browse">Browse</a>
    <a routerLink="favorites">Favorites</a>
</nav>

<router-outlet></router-outlet>
`})
export class AppComponent {
    title = 'app';

    constructor() {}
}

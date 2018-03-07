import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    @Output() userInput: EventEmitter<string> = new EventEmitter<string>();

    search(input: string) {
        this.userInput.emit(input);
    }
}

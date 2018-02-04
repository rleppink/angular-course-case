import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    template:
    `<input
        type="text"
        (keyup.enter)="onInput($event.target.value)">`
})
export class SearchComponent {
    @Output() userInput: EventEmitter<string> = new EventEmitter<string>();

    onInput(input: string) {
        this.userInput.emit(input);
    }
}

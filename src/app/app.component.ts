import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gallery-app';

  search: string = 'hello';

  inputText: string;

  setInputData(text: string) {
    this.inputText = text;
  }

  onSearchFilter() {
    return this.search;
  }
}

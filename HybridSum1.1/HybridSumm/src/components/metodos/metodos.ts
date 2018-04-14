import { Component } from '@angular/core';

/**
 * Generated class for the MetodosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'metodos',
  templateUrl: 'metodos.html'
})
export class MetodosComponent {

  text: string;

  constructor() {
    console.log('Hello MetodosComponent Component');
    this.text = 'Hello World';
  }

}

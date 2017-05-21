import { Component, Input } from '@angular/core';

/**
 * Generated class for the OrderListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'order-list',
  templateUrl: 'order-list.html'
})
export class OrderListComponent {

  text: string;
  @Input() options;

  constructor() {
    console.log('Hello OrderListComponent Component');
    this.text = 'Hello World';
  }

}

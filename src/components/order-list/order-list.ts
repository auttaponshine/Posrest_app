import { Component, Input, EventEmitter, Output } from '@angular/core';

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
  @Output() onReset = new EventEmitter();
  orderList: any;
  constructor() {
    this.initializeItems();
  }
  initializeItems() {
    this.orderList = this.options;
  }
  editItem(item) {
    console.log(item);
  }

  resetReset() {
    this.onReset.emit(true);
  }
}

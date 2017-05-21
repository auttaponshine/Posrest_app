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
export class OrderListComponent  {

  text: string;
  @Input() options;
  @Output() onReset = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  constructor() {
  }

  editItem(item) {
    this.onEdit.emit(item);
  }

  resetOrder() {
    this.onReset.emit(true);
  }
}

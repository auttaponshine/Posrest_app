import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderListComponent } from './order-list';

@NgModule({
  declarations: [
    OrderListComponent,
  ],
  imports: [
    IonicPageModule.forChild(OrderListComponent),
  ],
  exports: [
    OrderListComponent
  ]
})
export class OrderListComponentModule {}

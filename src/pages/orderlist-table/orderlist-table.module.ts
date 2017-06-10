import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderlistTablePage } from './orderlist-table';

@NgModule({
  declarations: [
    OrderlistTablePage,
  ],
  imports: [
    IonicPageModule.forChild(OrderlistTablePage),
  ],
  exports: [
    OrderlistTablePage
  ]
})
export class OrderlistTablePageModule {}

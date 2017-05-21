import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items: any;
  orderList: any;
  constructor(public navCtrl: NavController) {
    this.initializeItems();

  }

  initializeItems() {
    this.items = [{ name: "Coffee1", price: 100, amount: 1 },
    { name: "Coffee2", price: 100, amount: 2 },
    { name: "Coffee3", price: 100, amount: 3 },
    { name: "Coffee4", price: 100, amount: 4 },
    { name: "Coffee5", price: 100, amount: 5 }
    ];
    this.orderList = [];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selectItem(item) {
    this.orderList.push(item);
  }
  
  getOrderlist() {

  }
}

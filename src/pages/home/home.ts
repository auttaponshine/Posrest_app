import { Component } from '@angular/core';
import { ModalController, AlertController, NavController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import * as _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items: any;
  orderList: any = [];
  queueId: any;
  productTypes: any;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {
    this.initializeItems();

  }

  initializeItems() {
    this.items = [{ name: "Coffee1", price: 100 },
    { name: "Coffee2", price: 100 },
    { name: "Coffee3", price: 100 },
    { name: "Coffee4", price: 100 },
    { name: "Coffee5", price: 100 }
    ];
    this.orderList = [];
    this.queueId = 1;
  }

  presentModal(item, isEdit?) {
    let modal = this.modalCtrl.create(ModalPage, { item: item });

    modal.onDidDismiss(data => {
      if (!isEdit) {
        if (!_.isEmpty(data)) {
          let tempProduct = _.clone(data);
          tempProduct.id = this.queueId;
          
          this.orderList.push(tempProduct);
          this.queueId++;
          console.log(this.orderList);
        }

      } else {
        console.log(item);
      }
    });

    modal.present();
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  resetOrder() {
    this.orderList = [];
  }

  editItem(item) {
    this.presentModal(item, true);
  }

}

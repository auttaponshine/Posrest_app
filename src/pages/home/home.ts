import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items: any;
  orderList: any = [];
  orderDetails: any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
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
    this.orderDetails = {
      amount: 1
    }
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

  selectItem(item) {
    this.showAmount(item);
    item.orderDetails = {};
    item.orderDetails.amount = 1;
    item.orderDetails.grade = 'normal';
    item.orderDetails.sweet = 'normal';
  }

  showAmount(item) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Amount');
    alert.addInput({
      type: 'number',
      name: 'amount',
      value: this.orderDetails.amount,
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Next',
      handler: data => {
        item.orderDetails.amount = data.amount;
        this.showGrade(item);
      }
    });
    alert.present();
  }

  showGrade(item) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Grade');
    alert.addInput({
      type: 'radio',
      label: 'Normal',
      value: 'normal',
      checked: 'normal' === item.orderDetails.grade
    });
    alert.addInput({
      type: 'radio',
      label: 'High',
      value: 'high',
      checked: 'high' === item.orderDetails.grade
    });
    alert.addInput({
      type: 'radio',
      label: 'Premium',
      value: 'premium',
      checked: 'premium' === item.orderDetails.grade
    });
    alert.addButton({
      text: 'Back',
      handler: data => {
        this.showAmount(item);
      }
    });
    alert.addButton({
      text: 'Next',
      handler: data => {
        item.orderDetails.grade = data;
        this.showSweet(item);
      }
    });
    alert.present();
  }

  showSweet(item) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Sweet');
    alert.addInput({
      type: 'radio',
      label: 'No',
      value: 'no',
      checked: 'no' === item.orderDetails.sweet
    });
    alert.addInput({
      type: 'radio',
      label: 'Low',
      value: 'low',
      checked: 'low' === item.orderDetails.sweet

    });
    alert.addInput({
      type: 'radio',
      label: 'Normal',
      value: 'normal',
      checked: 'normal' === item.orderDetails.sweet

    });
    alert.addInput({
      type: 'radio',
      label: 'High',
      value: 'high',
      checked: 'high' === item.orderDetails.sweet

    });
    alert.addButton({
      text: 'Back',
      handler: data => {
        this.showGrade(item);
      }
    });
    alert.addButton({
      text: 'OK',
      handler: data => {
        item.orderDetails.sweet = data;
        this.orderList.push(item);
      }
    });
    alert.present();
  }

  resetOrder() {
    this.orderList = [];
  }

}

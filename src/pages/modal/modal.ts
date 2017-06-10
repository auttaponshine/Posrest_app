import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  orderDetails: any;
  selectedItem: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.initializeItems();
    this.selectedItem = navParams.get('item');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  initializeItems() {
    //Default value
    this.orderDetails = {
      amount: 1,
      grade: 'normal',
      sweet: 'normal'
    };
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  submitModal() {
    let item = {};
    item = this.selectedItem;
    item['orderDetails'] = this.orderDetails;

    this.viewCtrl.dismiss(item);
  }


}

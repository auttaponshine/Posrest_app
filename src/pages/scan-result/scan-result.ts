import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScanResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-scan-result',
  templateUrl: 'scan-result.html',
})
export class ScanResultPage {

   public scannedText: string;

  constructor(public navCtrl: NavController, private _navParams: NavParams) {}

  ionViewDidLoad() {
    this.scannedText = this._navParams.get("scannedText");

  }

}

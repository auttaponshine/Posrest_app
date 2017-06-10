import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ModalPage } from '../pages/modal/modal';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OrderListComponent } from '../components/order-list/order-list';
import { OrderlistTablePage } from '../pages/orderlist-table/orderlist-table';
import { QrCodePage } from '../pages/qr-code/qr-code';
import { ScanResultPage } from '../pages/scan-result/scan-result';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ModalPage,
    OrderListComponent,
    OrderlistTablePage,
    QrCodePage,
    ScanResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ModalPage,
    OrderlistTablePage,
    QrCodePage,
    ScanResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCodePage } from './qr-code';

@NgModule({
  declarations: [
    QrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodePage),
  ],
  exports: [
    QrCodePage
  ]
})
export class QrCodePageModule {}

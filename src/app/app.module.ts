import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//scanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//Diagnostic
import { Diagnostic } from '@ionic-native/diagnostic';

import { HttpClientModule} from "@angular/common/http";

import { ConsultaProvider } from '../providers/consulta/consulta';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Diagnostic,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsultaProvider
  ]
})
export class AppModule {}

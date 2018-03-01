import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { TecnologiasPage } from '../pages/tecnologias/tecnologias';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { YoutubePage } from '../pages/youtube/youtube';
import { GridPage } from '../pages/grid/grid';
import { AlertPage } from "../pages/alert/alert";

/* Secundarias: */
import { MasinfoPage } from '../pages/masinfo/masinfo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TecnologiasPage,
    HomePage,
    TabsPage,
    YoutubePage,
    GridPage,
    AlertPage,
    MasinfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TecnologiasPage,
    HomePage,
    TabsPage,
    YoutubePage,
    GridPage,
    AlertPage,
    MasinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

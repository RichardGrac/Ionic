import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { TecnologiasPage } from '../tecnologias/tecnologias';
import { HomePage } from '../home/home';
import { YoutubePage } from '../youtube/youtube';
import {GridPage} from "../grid/grid";
import {AlertPage} from "../alert/alert";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = TecnologiasPage;
  tab4Root = YoutubePage;
  tab5Root = GridPage;
  tab6Root = AlertPage;

  constructor() {

  }
}

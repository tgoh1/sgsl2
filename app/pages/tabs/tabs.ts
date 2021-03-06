import {Component} from '@angular/core'
import {Home} from '../home/home';
import {Levels} from '../levels/levels';
import {Camera} from '../camera/camera';
import {Info} from '../info/info';
import {Pushpage} from '../pushpage/pushpage';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Home;
    this.tab2Root = Levels;
    this.tab3Root = Camera;
    this.tab4Root = Info;
  }
}

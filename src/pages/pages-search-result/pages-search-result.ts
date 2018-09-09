import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PagesSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-search-result',
  templateUrl: 'pages-search-result.html',
})
export class PagesSearchResultPage {
  private data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('data'));
    this.data = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesSearchResultPage');
  }

}

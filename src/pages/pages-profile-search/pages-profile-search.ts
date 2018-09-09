import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PagesProfileSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-profile-search',
  templateUrl: 'pages-profile-search.html',
})
export class PagesProfileSearchPage {

  private data: any = {}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  getUserInformation() {
    console.log(this.data);
    this.navCtrl.push('PagesSearchResultPage', {data: this.data});
  }
  ionViewDidLoad() {
  }

}

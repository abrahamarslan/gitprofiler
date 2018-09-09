import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GitHubServiceProvider} from "../../providers/git-hub-service/git-hub-service";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private gitService: GitHubServiceProvider) {
    console.log(this.navParams.get('data'));

  }

  getUserInformation(): void {
    this.gitService.getMockUserInformation(this.data.username).subscribe(data => this.data = data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesSearchResultPage');
    this.data = this.navParams.get('data');
    if(this.data.username)
    {
      this.getUserInformation();
    }
  }

}

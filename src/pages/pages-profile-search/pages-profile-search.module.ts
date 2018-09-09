import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesProfileSearchPage } from './pages-profile-search';

@NgModule({
  declarations: [
    PagesProfileSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesProfileSearchPage),
  ],
})
export class PagesProfileSearchPageModule {}

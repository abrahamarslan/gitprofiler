import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesSearchResultPage } from './pages-search-result';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PagesSearchResultPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PagesSearchResultPage),
  ],
})
export class PagesSearchResultPageModule {}

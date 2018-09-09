import {Component, Input} from '@angular/core';

/**
 * Generated class for the ComponentsSearchResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-search-results',
  templateUrl: 'components-search-results.html'
})
export class ComponentsSearchResultsComponent {

  text: string;

  @Input() data: any;


}

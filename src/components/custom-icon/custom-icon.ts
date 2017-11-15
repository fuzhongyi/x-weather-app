import {Component, Input} from '@angular/core';

/**
 * Generated class for the CustomIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-icon',
  templateUrl: 'custom-icon.html'
})
export class CustomIconComponent {

  @Input('text') text: string;
  @Input('color') color: string;
  @Input('size') size: string;

  constructor() {
  }
}

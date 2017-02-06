import { Component } from '@angular/core';
import {HighlightDirective} from "./highlight.directive";

@Component({
  moduleId: module.id,
  selector: 'directives-app',
  templateUrl: 'directives.component.html',
  styleUrls: ['directives.component.css'],
  directives: [HighlightDirective]
})
export class DirectivesAppComponent {

  private switch = true;

  private items = [1, 2, 3, 4, 5];

  private value = 10;

  onSwitch(){
    this.switch = !this.switch;
  }
}

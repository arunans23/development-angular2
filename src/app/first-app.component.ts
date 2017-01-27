import { Component } from '@angular/core';
import {OtherComponent, AnotherComponent} from "./other";
@Component({
  moduleId: module.id,
  selector: 'first-app-app',
  template: '<h1>First App</h1> <app-other></app-other> <app-another></app-another>',
  styles: ['h1 {color: blue}'],
  directives: [OtherComponent, AnotherComponent]
})
export class FirstAppAppComponent {

}

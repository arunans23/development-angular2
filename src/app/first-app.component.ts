import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding';

@Component({
  moduleId: module.id,
  selector: 'first-app-app',
  template: '<h1>In line Template</h1><app-databinding></app-databinding>',
  directives: [DatabindingComponent]
})
export class FirstAppAppComponent {

}

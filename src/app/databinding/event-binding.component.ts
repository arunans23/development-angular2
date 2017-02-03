import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click Me!</button>
  `,
  styles: []
})
export class EventBindingComponent  {
    onClicked(){
      alert('It worked!');
    }

}

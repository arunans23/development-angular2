import { Component } from '@angular/core';
import {LifecycleComponent} from "./lifecycle.component";

@Component({
  moduleId: module.id,
  selector: 'first-app-app',
  template:`
  <h1>Root Component</h1>
  <app-lifecycle *ngIf="!delete" [bindable]="boundableValue"><p>{{title}}</p></app-lifecycle>
  <button (click)="delete = true">Click to delete</button>
  <button (click)="title = 'Changed value'">Click to change content</button>
  <button (click)="boundableValue = 2000">Click to change binding</button>
  `,
  directives: [LifecycleComponent]
})
export class FirstAppAppComponent {
  delete = false;
  title = 'starting point';
  boundableValue = 1000;
}

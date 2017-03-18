import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  check = "myName";
  date = new Date(2017, 3,18);
  values = ['Milk', 'Bread', 'Beans'];
}

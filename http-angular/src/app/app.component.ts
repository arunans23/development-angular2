import { Component, OnInit } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  items :any[] = [];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService){

  }


  onSubmit(username: String, email: String) {
    this.httpService.sendData({
      username: username,
      email: email
    }).subscribe(
      data => console.log(data)
    );
  }

  onGetData(){
    this.httpService.getOwnData().subscribe(
      data => {
        const myArray = [];
        for (let key in data){
          myArray.push(data[key]);
        }
        this.items = myArray;
      }
    );
  }
}

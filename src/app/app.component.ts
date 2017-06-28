import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello</h1>
  
  <!--Property Binding
  <img src="{{logo}}">
  <img [src]="logo">
  <img bind-src="logo">-->

  <!--Event Binding
  <button (mouseover)="myEvent()">My Button</button>-->

  <h1 [ngClass]="titleClasses">Hello!</h1>

  <p>{{foo}}</p>

  `,
  styles: [`
  h1{
    text-decoration: underline;
  }

  .red{
    color: red;
  }
  .large{
    font-size: 5em;
  }
  `]
})
export class AppComponent {
  constructor(private dataService:DataService){

  }

  foo = '';

  ngOnInit(){
    console.log(this.dataService.cars)
    this.foo = this.dataService.myData()
  }

  name = "jason"
  myEvent() {
    console.log(this.name)
  }

  titleClasses = {
    'red': true,
    'large': true
  }

}

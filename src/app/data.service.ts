import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'ford', 'chevy', 'toyota'
  ]
  myData(){
    return 'this is my data.'
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  count = 0;

  getCounter() {
    // console.log("getCounter Called");
    return this.count;
    
  }

  increseCounter() {
    this.count = this.count + 1;
    // console.log('increseCounter Called');

  }
}

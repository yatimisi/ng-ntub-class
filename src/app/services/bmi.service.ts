import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  name: string;

  constructor() { }

  sayHello() {
    alert('Hello');
  }
}

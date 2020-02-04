import { Component } from '@angular/core';
import { Account } from './models/account.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo01';
  age = 10;
  acc: Account = {
    account: 'user01',
    password: 'pwd',
  };

  sayHi(word: string = 'Hi') {
    alert(word);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BmiService } from '../bmi.service';


@Component({
  selector: 'app-listen01',
  templateUrl: './listen01.component.html',
  styleUrls: ['./listen01.component.scss']
})
export class Listen01Component implements OnInit {

  money = 0;
  @Output() twMoneyChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private bmiService: BmiService,
  ) { }

  ngOnInit() {
  }

  callServices() {
    this.bmiService.sayHello();
  }

}

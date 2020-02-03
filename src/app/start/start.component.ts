import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  @Input() buttonTitle: string;

  constructor() { }

  ngOnInit() {
  }

}

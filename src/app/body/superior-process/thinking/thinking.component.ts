import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thinking',
  templateUrl: './thinking.component.html',
  styleUrls: ['./thinking.component.css', '../../sensitive-process/senzitivity/senzitivity.component.css']
})
export class ThinkingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatIsThk = false;

  onWhatIsThkClick() {
    this.whatIsThk = !this.whatIsThk;
  }


  thkCaracteristic = false;

  onThkCaracteristicClick() {
    this.thkCaracteristic = !this.thkCaracteristic;
  }

  thkOp = false;

  onThkOpClick() {
    this.thkOp = !this.thkOp;
  }
}

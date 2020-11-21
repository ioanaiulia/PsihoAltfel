import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-willness',
  templateUrl: './willness.component.html',
  styleUrls: ['./willness.component.css', '../../sensitive-process/senzitivity/senzitivity.component.css']
})
export class WillnessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatIsV = false;

  onWhatIsVClick() {
    this.whatIsV = !this.whatIsV;
  }

  cv = false;

  onCVClick() {
    this.cv = !this.cv;
  }

  vsteps = false;

  onVStepsClick() {
    this.vsteps = !this.vsteps;
  }

}

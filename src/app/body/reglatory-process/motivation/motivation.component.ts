import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css', '../../sensitive-process/senzitivity/senzitivity.component.css']
})
export class MotivationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatIsMt = false;

  onWhatIsMtClick() {
    this.whatIsMt = !this.whatIsMt;
  }

  mtCaracteristic = false;

  onMtCaracteristicClick() {
    this.mtCaracteristic = !this.mtCaracteristic;
  }

  mtComponent = false;

  onMtComponentClick() {
    this.mtComponent = !this.mtComponent;
  }

  mtfunction = false;

  onMtFunctionClick(){
    this.mtfunction = !this.mtfunction;
  }

  optimum = false;

  onOptimumClick() {
    this.optimum = !this.optimum;
  }
}

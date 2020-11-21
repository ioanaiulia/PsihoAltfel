import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css', '../../sensitive-process/senzitivity/senzitivity.component.css']
})
export class MemoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatIsMm = false;

  onWhatIsMmClick() {
    this.whatIsMm = !this.whatIsMm;
  } 

  mmCaracteristic = false;

  onMmCaracteristicClick() {
    this.mmCaracteristic = !this.mmCaracteristic;
  }

  mmPandF = false;

  onMmPandFClick() {
    this.mmPandF = !this.mmPandF;
  }

  mmFactors = false;

  onMmFactorsClick() {
    this.mmFactors = !this.mmFactors;
  }

  forgetting = false;

  onForgettingClick() {
    this.forgetting = !this.forgetting;
  }

}

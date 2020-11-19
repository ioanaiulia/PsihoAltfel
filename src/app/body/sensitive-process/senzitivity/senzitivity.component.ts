import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senzitivity',
  templateUrl: './senzitivity.component.html',
  styleUrls: ['./senzitivity.component.css']
})
export class SenzitivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatAreSenzation = false;

  onWhatAreSenzationClick() {
    this.whatAreSenzation = !this.whatAreSenzation;
  }
  
  whatIsAnalisator = false;

  onWhatIsAnalisatorClick() {
    this.whatIsAnalisator = !this.whatIsAnalisator;
  }

  senzationTypes = false;

  onSenzationTypesClick() {
    this.senzationTypes = !this.senzationTypes;
  }

  senzationCharacteristic = false;

  onSenzationCharacteristicClick() {
    this.senzationCharacteristic = !this.senzationCharacteristic;
  }

  senzationLaws = false;
  
  onSenzationLawsClick() {
    this.senzationLaws = !this.senzationLaws;
  }
}


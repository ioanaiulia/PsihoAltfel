import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perception',
  templateUrl: './perception.component.html',
  styleUrls: ['./perception.component.css', "../senzitivity/senzitivity.component.css"]
})
export class PerceptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatArePerception = false;

  onWhatArePerceptionClick() {
    this.whatArePerception = !this.whatArePerception;
  }

  perceptionSteps = false;

  onPerceptionStepsClick() {
    this.perceptionSteps = !this.perceptionSteps;
  }

  perceptionTypes = false;

  onPerceptionTypesClick() {
    this.perceptionTypes = !this.perceptionTypes;
  }

  perceptionLaws = false;

  onPerceptionLawsClick() {
    this.perceptionLaws = !this.perceptionLaws;
  }

  perceptionCharacteristic = false;

  onPerceptionCharacteristicClick() {
    this.perceptionCharacteristic = !this.perceptionCharacteristic;
  }
}

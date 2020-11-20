import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reprezentation',
  templateUrl: './reprezentation.component.html',
  styleUrls: ['./reprezentation.component.css', "../senzitivity/senzitivity.component.css"]
})
export class ReprezentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatAreRepr = false;

  onWhatAreReprClick() {
    this.whatAreRepr = !this.whatAreRepr;
  }
  
  reprRol = false;

  onReprRolClick() {
    this.reprRol = !this.reprRol;
  }

  reprTypes = false;

  onReprTypesClick() {
    this.reprTypes = !this.reprTypes;
  }

  reprCharacteristic = false;

  onReprCharacteristicClick(){
    this.reprCharacteristic = !this.reprCharacteristic;
  }
}

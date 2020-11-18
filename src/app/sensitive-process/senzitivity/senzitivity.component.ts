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

}

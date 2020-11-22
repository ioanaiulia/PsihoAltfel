import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affection',
  templateUrl: './affection.component.html',
  styleUrls: ['./affection.component.css', '../../sensitive-process/senzitivity/senzitivity.component.css']
})
export class AffectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatIsAF = false;

  onWhatIsAFClick() {
    this.whatIsAF = !this.whatIsAF;
  }

  caract = false;
  
  onCaracteristciClick() {
    this.caract = !this.caract;
  }

  clas = false;
  onClasificareClick() {
    this.clas = !this.clas;
  }
}

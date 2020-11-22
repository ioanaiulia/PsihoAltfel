import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.css', '../sensitive-process/senzitivity/senzitivity.component.css']
})
export class PersonalityComponent implements OnInit {0

  constructor() { }

  ngOnInit(): void {
  }

  whatIsPers = false;

  onWhatIsPersClick() {
    this.whatIsPers = !this.whatIsPers;
  }

  temp = false;

  onTempClick() {
    this.temp = !this.temp;
  }

  apt = false;

  onAptClick() {
    this.apt = !this.apt;
  }

  caract = false;
  
  onCaractClick() {
    this.caract = !this.caract;
  }

  creativity = false;

  onCreativityClick() {
    this.creativity = !this.creativity;
  }
}

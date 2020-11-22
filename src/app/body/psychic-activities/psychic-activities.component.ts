import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psychic-activities',
  templateUrl: './psychic-activities.component.html',
  styleUrls: ['./psychic-activities.component.css', '../sensitive-process/senzitivity/senzitivity.component.css']
})
export class PsychicActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatIsAct = false;

  onWhatIsActClick() {
    this.whatIsAct = !this.whatIsAct;
  }

  limb = false;

  onLimbClick() {
    this.limb = !this.limb;
  }

}

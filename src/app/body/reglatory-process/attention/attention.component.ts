import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.css', '../../sensitive-process/senzitivity/senzitivity.component.css']
})
export class AttentionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatIsAT = false;

  onWhatIsATClick() {
    this.whatIsAT = !this.whatIsAT;
  }

  ta = false;

  onTAClick() {
    this.ta = !this.ta;
  }

  qa = false;

  onQAClick() {
    this.qa = !this.qa;
  }


}

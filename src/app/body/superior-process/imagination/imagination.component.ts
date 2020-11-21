import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagination',
  templateUrl: './imagination.component.html',
  styleUrls: ['./imagination.component.css', '../../sensitive-process/senzitivity/senzitivity.component.css']
})
export class ImaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  whatIsImg = false;

  onWhatIsImgClick() {
    this.whatIsImg = !this.whatIsImg;
  }

  imgForms = false;

  onImgFormsClick() {
    this.imgForms = !this.imgForms;
  }

  imgProc = false;

  onImgProcClick() {
    this.imgProc = !this.imgProc;
  }

  imgCaracteristic = false;

  onImgCaracteristicClick() {
    this.imgCaracteristic = !this.imgCaracteristic;
  }

}

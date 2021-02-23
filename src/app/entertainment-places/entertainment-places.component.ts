import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment-places',
  templateUrl: './entertainment-places.component.html',
  styleUrls: ['./entertainment-places.component.css']
})
export class EntertainmentPlacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  arr = [1, 2, 3,4, 5, 6];
}

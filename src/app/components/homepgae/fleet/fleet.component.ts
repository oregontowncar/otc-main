import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit {

  cards: any = [
    {
      id: 1,
      name: 'Rentals',
      image: 'assets/img/fleet1.png',
      dynamic: 'Efficient',
      content: 'Independence',
    },
    {
      id: 2,
      name: 'Bikes & Scooters',
      image: 'assets/img/fleet2.png',
      dynamic: 'Efficient',
      content: 'Eco-friendly',
    },
    {
      id: 3,
      name: 'Shared Rides',
      image: 'assets/img/fleet3.png',
      dynamic: 'Budget-friendly',
      content: 'Private',
    },
    {
      id: 4,
      name: 'Wait & Save',
      image: 'assets/img/fleet4.png',
      dynamic: 'Budget-friendly',
      content: 'Eco-friendly',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

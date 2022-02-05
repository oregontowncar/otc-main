import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-fleet',
  templateUrl: './our-fleet.component.html',
  styleUrls: ['./our-fleet.component.scss']
})
export class OurFleetComponent implements OnInit {

  data: any = [
    {
      id: 1,
      name: 'Rentals',
      image: 'assets/img/fleet1.png',
      passengers: '4 Passengers',
      bags: '3 Bags',
      private: 'Efficient',
      budget: 'Independence',
    },
    {
      id: 2,
      name: 'Bikes & Scooters',
      image: 'assets/img/fleet2.png',
      passengers: '2 Passengers',
      bags: '1 Bags',
      private: 'Private',
      budget: 'Efficient',
    },
    {
      id: 3,
      name: 'Shared Rides',
      image: 'assets/img/fleet3.png',
      passengers: '4 Passengers',
      bags: '3 Bags',
      private: 'Efficient',
      budget: 'Budget-friendly',
    },
    {
      id: 4,
      name: 'Private Car',
      image: 'assets/img/fleet5.png',
      passengers: '1 Passengers',
      bags: '3 Bags',
      private: 'Independence',
      budget: 'Top Driver',
    },
    {
      id: 5,
      name: 'Priority Pickup',
      image: 'assets/img/fleet6.png',
      passengers: '3 Passengers',
      bags: '4 Bags',
      private: 'Private',
      budget: 'Budget-friendly',
    },
    {
      id: 6,
      name: 'Oregon Car XL',
      image: 'assets/img/fleet8.png',
      passengers: '6 Passengers',
      bags: '6 Bags',
      private: 'Extra seats',
      budget: 'Eco-friendly',
    },
    {
      id: 7,
      name: 'Oregon Car LUX',
      image: 'assets/img/fleet9.png',
      passengers: '2 Passengers',
      bags: '3 Bags',
      private: 'Premium',
      budget: 'Top Driver',
    },
    {
      id: 8,
      name: 'Transit',
      image: 'assets/img/fleet10.png',
      passengers: '27 Passengers',
      bags: '27 Bags',
      private: 'Efficient',
      budget: 'Budget-friendly',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

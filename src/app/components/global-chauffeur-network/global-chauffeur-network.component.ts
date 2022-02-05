import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-chauffeur-network',
  templateUrl: './global-chauffeur-network.component.html',
  styleUrls: ['./global-chauffeur-network.component.scss']
})
export class GlobalChauffeurNetworkComponent implements OnInit {

  data: any = [
    {
      id: 1,
      image: 'assets/img/global1.jpg',
      name: 'Run it all from one place',
      text: 'It’s a digital “headquarters” for all your company’s ground transportation.',
    },
    {
      id: 2,
      image: 'assets/img/global2.jpg',
      name: 'Streamline your expensing',
      text: 'Say Hello To Automated Expense Reporting & Goodbye To Manual Processes. Get a clear view into all your trip activity and automate billing, expensing, and reporting.',
    },
    {
      id: 3,
      image: 'assets/img/global3.jpg',
      name: 'Support',
      text: 'Customer service team 24/7',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

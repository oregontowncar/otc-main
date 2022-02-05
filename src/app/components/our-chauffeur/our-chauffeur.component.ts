import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-chauffeur',
  templateUrl: './our-chauffeur.component.html',
  styleUrls: ['./our-chauffeur.component.scss']
})
export class OurChauffeurComponent implements OnInit {

  data: any = [
    {
      id: 1,
      image: 'assets/img/chauffer1.jpg',
      name: 'Background Check',
      text: 'Every employee must undergo a background check to make sure that we employ only honest and trustworthy people.',
    },
    {
      id: 2,
      image: 'assets/img/chauffer2.jpg',
      name: 'Drug Test',
      text: 'Each driver must submit to a pre-employment drug test. We also do random drug testing as a part of continuing employment.',
    },
    {
      id: 3,
      image: 'assets/img/chauffer3.jpg',
      name: 'Social Media Audit',
      text: 'We randomly check our driver’s social media activity to make sure that total confidentiality is being maintained.',
    },
    {
      id: 4,
      image: 'assets/img/chauffer4.jpg',
      name: 'Driving Record Review',
      text: 'Before we offer a position to anyone driving for Oregon Town Car we perform a careful review of each applicant’s driving record to make sure they are safe driver’s.',
    },
    {
      id: 5,
      image: 'assets/img/chauffer5.jpg',
      name: 'In-person interview',
      text: 'Each potential employee is interviewed face to face by the president of our company to make sure that they meet our high standards.',
    },
    {
      id: 6,
      image: 'assets/img/chauffer6.jpg',
      name: 'Ongoing training',
      text: 'All of our drivers undergo 8 hours of intense training when they begin working with us. They are then given frequent in-service training in order to keep current on any new laws and and also on ways to keep our passengers safe.',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

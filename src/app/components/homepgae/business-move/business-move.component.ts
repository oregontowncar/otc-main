import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-move',
  templateUrl: './business-move.component.html',
  styleUrls: ['./business-move.component.scss']
})
export class BusinessMoveComponent implements OnInit {

  data: any = [
    {
      id: 1,
      image: 'assets/img/business1.jpg',
      name: 'Courtesy rides',
    },
    {
      id: 1,
      image: 'assets/img/business2.jpg',
      name: 'Group transportation',
    },
    {
      id: 1,
      image: 'assets/img/business3.jpg',
      name: 'Employee rides',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

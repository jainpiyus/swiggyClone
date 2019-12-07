import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.scss']
})
export class SingleRestaurantComponent implements OnInit {
  itemList = new Array(4);
  constructor() { }

  ngOnInit() {
  }

}

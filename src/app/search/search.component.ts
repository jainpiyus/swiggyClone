import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = 'Clear me';
  products = new Array(6);
  itemList = new Array(6);
  restaurants = new Array();
  constructor(private router: Router, private restaurantService: RestaurantsService) {
    this.restaurantService.getAllRestaurants().subscribe(res => {
      this.restaurants = res;
    });
  }

  ngOnInit() {
  }

  goToRestaurant(id) {
    this.router.navigate(['restaurants/101']);
  }
}

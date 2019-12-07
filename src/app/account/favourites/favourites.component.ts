import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  restaurants = new Array();
  loaderRestaurant = new Array(8);
  constructor(private router: Router, private restaurantService: RestaurantsService) { 
    this.restaurantService.getAllRestaurants().subscribe(res=>{
      this.restaurants = res;
    });
  }
  ngOnInit() {
  }

}

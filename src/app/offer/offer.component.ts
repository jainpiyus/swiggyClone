import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  loaderRestaurant = new Array(8);
  restaurants = new Array();
  constructor(private router: Router, private restaurantService: RestaurantsService) { 
    this.restaurantService.getAllRestaurants().subscribe(res=>{
      this.restaurants = res;
    });
  }

  ngOnInit() {
  }

}

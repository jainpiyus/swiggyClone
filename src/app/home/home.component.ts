import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemList = new Array(4);
  restaurants: any[];
  constructor(private router: Router, private restaurantService: RestaurantsService) { 
    this.restaurantService.getAllRestaurants().subscribe(res=>{
      this.restaurants = res;
    });
  }

  ngOnInit() {
  }
  goToRestaurant(id){
    this.router.navigate(['restaurants/101']);
  }

}

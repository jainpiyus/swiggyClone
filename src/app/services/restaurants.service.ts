import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/delay';
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  api = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  getAllRestaurants(): Observable<any> {
    return this.httpClient.get(this.api+"/restaurants");
    
  }
}

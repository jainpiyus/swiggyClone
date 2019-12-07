import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleRestaurantComponent } from './single-restaurant/single-restaurant.component';
import { SearchComponent } from './search/search.component';
import { HelpComponent } from './shared/help/help.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { AddressesComponent } from './account/addresses/addresses.component';
import { FavouritesComponent } from './account/favourites/favourites.component';
import { OrdersComponent } from './account/orders/orders.component';
import { PaymentsComponent } from './account/payments/payments.component';
import { OfferComponent } from './offer/offer.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: 'restaurants', component: HomeComponent
  },
  {
    path: 'restaurants/:id', component: SingleRestaurantComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'help', component: HelpComponent
  },
  {
    path: 'offers', component: OfferComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'my-account', component: MyAccountComponent,
    children: [
      {
        path: 'addresses', component: AddressesComponent
      },
      {
        path: 'favourites', component: FavouritesComponent
      },
      {
        path: 'orders', component: OrdersComponent
      },
      {
        path: 'payments', component: PaymentsComponent
      },

      {
        path: '', redirectTo: 'orders', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'orders', pathMatch: 'full'
      }
    ]
  },
  {
    path: '', redirectTo: 'restaurants', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'restaurants', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

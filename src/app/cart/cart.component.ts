import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/Ilogin';
import { HelperService } from '../services/helper.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  user: User;
  items = new Array(4);
  constructor(private helperService: HelperService, private router: Router, 
    public loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.loggedIn.subscribe(next => {
      this.user = next;
    });
  }
  openLoginSideNav(){
    this.helperService.loginSideNav.next(true);
  }

}

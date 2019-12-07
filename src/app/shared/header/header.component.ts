import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Ilogin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemList = new Array(3);
  user: User;
  
  
  constructor(private helperService: HelperService, private router: Router, 
    public loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.loggedIn.subscribe(next => {
      this.user = next;
    });
  }

  openAddressSideNav (){
    this.helperService.addressSideNav.next(true);
  }
  openLoginSideNav(){
    this.helperService.loginSideNav.next(true);
  }
  logout() {
    this.user = null;
    this.loginService.loggedIn.next(this.user);
  }
  
}

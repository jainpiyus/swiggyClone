import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swiggyClone';
  addressNavEnable = false;
  loginSideNavEnable = false;
  enableAccount = 'signin';
  constructor(private helperService: HelperService){
    this.helperService.addressSideNav.subscribe(res=>{
      this.addressNavEnable = res;
    });
    this.helperService.loginSideNav.subscribe(res=>{
      this.loginSideNavEnable = res;
    });
    this.helperService.enableAccount.subscribe(res=>{
      this.enableAccount = res;
    });
    
  }

}

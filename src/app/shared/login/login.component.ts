import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/interfaces/Ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {} as User;
  constructor(private helperService: HelperService, private loginService: LoginService) { }

  login(){
      this.user.mobileNumber = 'Piyush';
      this.loginService.loggedIn.next(this.user);
      this.closeLoginNav();
  }
  ngOnInit() {
  }
  signupEnable (){
   this.helperService.enableAccount.next('signup');
  }
  closeLoginNav(){
    this.helperService.loginSideNav.next(false);
  }
}

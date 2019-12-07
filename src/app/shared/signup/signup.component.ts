import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit() {
  }
  loginEnable (){
   this.helperService.enableAccount.next('signin');
  }
  closeLoginNav(){
    this.helperService.loginSideNav.next(false);
  }
}

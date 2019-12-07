import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  addressSideNav = new BehaviorSubject(false);
  loginSideNav = new BehaviorSubject(false);
  enableAccount = new BehaviorSubject('signin');
  constructor() { }
}

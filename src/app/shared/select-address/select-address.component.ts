import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.scss']
})
export class SelectAddressComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit() {
  }

  closeAddressNav(){
    this.helperService.addressSideNav.next(false);
  }

}

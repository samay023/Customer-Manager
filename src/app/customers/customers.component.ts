import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerList:Customer[]=[]

  constructor(private _customerService: CustomerService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {

    // Sets the customer list object
    this._customerService.getCustomers().subscribe(customer =>{
        this.customerList = customer;
        this.cd.markForCheck();
      });
  }
}

export interface Customer {
  id: Number,
  name: String,
  username: String,
  email: String,
  address:{
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String
    },
    phone: String,
    website: String,
    company:{
      name: String,
      catchPhrase: String,
      bs: String
    }
  }
}
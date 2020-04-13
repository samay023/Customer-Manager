import { CustomerService } from './../customers/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Customer } from '../customers/customers.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer$:Observable<Customer>;
  loading:Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CustomerService
  ) {}

  ngOnInit() {
    this.customer$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCustomer(Number(params.get('id'))))
    );
    
  }

  goBackToCustomerPage() {
    this.router.navigate(['/customers']);
  }
}

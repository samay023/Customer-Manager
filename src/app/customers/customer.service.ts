import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customers.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>('https://jsonplaceholder.typicode.com/users');
  }

  getCustomer(customerID:number): Observable<Customer>{
    return this.http.get<Customer>('https://jsonplaceholder.typicode.com/users/'+customerID);
  }
}

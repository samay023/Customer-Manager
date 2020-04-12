import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customer/:id', component: CustomerComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

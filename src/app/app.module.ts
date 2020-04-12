import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbUserModule, NbLayoutModule, NbSidebarModule, NbTabsetModule,
  NbMenuModule, NbCardModule, NbProgressBarModule, NbListModule, NbBadgeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbListModule,
    NbTabsetModule,
    NbUserModule,
    NbProgressBarModule,
    NbLayoutModule,
    NbBadgeModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

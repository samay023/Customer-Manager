import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Customer-Manager';

  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
    },
    {
      title: 'Customers',
      icon: 'people-outline',
    },
    {
      title: 'Orders (Pending)',
      icon: 'paper-plane-outline',
    },
    {
      title: 'Orders (Completed)',
      icon: 'paper-plane',
    },
    {
      title: 'Notifications',
      icon: 'bell-outline',
    },
    {
      title: 'Info',
      icon: 'question-mark-circle-outline',
    },
    {
      title: 'Settings',
      icon: 'settings-2-outline',
    }
  ];
}

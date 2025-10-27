import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../home/home.page').then(m => m.HomePage)
      },
      {
        path: 'check-in',
        loadComponent: () => import('../check-in/check-in.page').then(m => m.CheckInPage)
      },
      {
        path: 'attendance',
        loadComponent: () => import('../attendance/attendance.page').then(m => m.AttendancePage)
      },
      {
        path: 'account',
        loadComponent: () => import('../account/account.page').then(m => m.AccountPage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];
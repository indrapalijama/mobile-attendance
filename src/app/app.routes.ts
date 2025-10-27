import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes)
  },
  {
    path: 'check-in',
    loadComponent: () => import('./check-in/check-in.page').then( m => m.CheckInPage)
  }
];
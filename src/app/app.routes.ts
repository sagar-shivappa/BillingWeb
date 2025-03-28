import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SalesComponent } from './components/sales/sales.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'home',
    loadChildren: () => [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'settings',
    loadChildren: () => [
      {
        path: 'items',
        component: ItemsComponent,
      },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  {
    path: 'document',
    loadChildren: () => [
      {
        path: 'sales',
        component: SalesComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

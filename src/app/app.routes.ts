import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Posh | Home',
    loadComponent: async () => (await import('./pages/home/home.component')).HomeComponent,
  },
  {
    path: 'about',
    title: 'Posh | About',
    loadComponent: async () => (await import('./pages/about/about.component')).AboutComponent,
  },
  { path: '**', redirectTo: '' },
];

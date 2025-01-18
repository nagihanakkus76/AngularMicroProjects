import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    title: 'Home',
    children: [
      {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
      },
      {
        path: 'placeholder',
        loadComponent: () => import('./components/placeholder/placeholder.component').then(c => c.PlaceholderComponent),
        title: 'Placeholder'
      },
      {
        path: 'table',
        loadComponent: () => import('./components/table/table.component').then(c => c.TableComponent),
        title: 'Table',
        children: [
          {
            path: '', loadComponent: () => import('./components/biography/biography.component').then(c => c.BiographyComponent),
          },
          {
            path: 'companies', loadComponent: () => import('./components/companies/companies.component').then(c => c.CompaniesComponent),
          },
          {
            path: 'partners', loadComponent: () => import('./components/partners/partners.component').then(c => c.PartnersComponent),
          }
        ]
      },
      {
        path: 'list',
        loadComponent: () => import('./components/list/list.component').then(c => c.ListComponent),
        title: 'List'
      },
      {
        path: 'popup',
        loadComponent: () => import('./components/popup/popup.component').then(c => c.PopupComponent),
        title: 'Popup'
      },

      {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found.component').then(c => c.NotFoundComponent),
        title: 'Not Found'
      },
    ]
  }
];

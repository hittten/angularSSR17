import { Routes } from '@angular/router';
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page.component').then(c => c.HomePageComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page.component').then(c => c.AboutPageComponent)
  },
  {
    path: 'angular-profile',
    loadComponent: () => import('./pages/angular-git-hub-page/angular-git-hub-page.component').then(c => c.AngularGitHubPageComponent)
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

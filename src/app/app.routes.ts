import { Routes } from '@angular/router';

import { LoginComponent } from './core/pages/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';
import { CoreComponent } from './core/core.component';

export const APP_ROUTES: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'cursos',
        loadChildren: () => import("./curso/curso.routes").then(r => r.CURSO_ROUTES)
      }
    ]
  }
];

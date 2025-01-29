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
        path: 'categorias',
        loadChildren: () => import("./categoria/categoria.routes").then(r => r.CATEGORIA_ROUTES)
      },
      {
        path: 'certificados',
        loadChildren: () => import("./certificado/certificado.routes").then(r => r.CERTIFICADO_ROUTES)
      },
      {
        path: 'cursos',
        loadChildren: () => import("./curso/curso.routes").then(r => r.CURSO_ROUTES)
      },
      {
        path: 'plataformas',
        loadChildren: () => import("./plataforma/plataforma.routes").then(r => r.PLATAFORMA_ROUTES)
      }
    ]
  }
];

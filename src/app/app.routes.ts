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
        path: 'categories',
        loadChildren: () => import("./category/category.routes").then(r => r.CATEGORY_ROUTES)
      },
      {
        path: 'certificates',
        loadChildren: () => import("./certificate/certificate.routes").then(r => r.CERTIFICATE_ROUTES)
      },
      {
        path: 'courses',
        loadChildren: () => import("./course/course.routes").then(r => r.COURSE_ROUTES)
      },
      {
        path: 'plataforms',
        loadChildren: () => import("./platform/platform.routes").then(r => r.PLATFORM_ROUTES)
      }
    ]
  }
];

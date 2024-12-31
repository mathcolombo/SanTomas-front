import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'AppComponent'
  },
  {
    path: 'home',
    component: AppComponent,
  },
  // {
  //   path: 'cursos',
  //   loadChildren: () => import('url').then(r => r.ROUTS)
  // }
];

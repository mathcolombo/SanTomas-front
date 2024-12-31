import { Routes } from '@angular/router';
import { CursoCadastroComponent } from './pages/curso-cadastro/curso-cadastro.component';
import { CursoListagemComponent } from './pages/curso-listagem/curso-listagem.component';

export const CURSO_ROUTES: Routes = [
  {
    path: '',
    component: CursoListagemComponent
  },
  {
    path: 'cadastro',
    component: CursoCadastroComponent
  }
];

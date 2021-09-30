import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoRoutes } from './atendimentos';

const router: Routes = [
  {
    path: '',
    redirectTo: 'atendimentos/listar',
    pathMatch: 'full'
  },
  ...AtendimentoRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

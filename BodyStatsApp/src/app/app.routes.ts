import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaCreateComponent } from './views/pessoa-create/pessoa-create.component';
import { PessoaEditComponent } from './views/pessoa-edit/pessoa-edit.component';
import { PessoaDetailComponent } from './views/pessoa-detail/pessoa-detail.component';
import { PesoIdealPopupComponent } from './components/peso-ideal-popup/peso-ideal-popup.component';

export const routes: Routes = [
  { path: 'pessoas', component: PessoaListComponent },
  { path: 'pessoas/create', component: PessoaCreateComponent },
  { path: 'pessoas/:id/edit', component: PessoaEditComponent },
  { path: 'pessoas/:id', component: PessoaDetailComponent },
  { path: 'calcular-peso-ideal', component: PesoIdealPopupComponent },
  { path: '', redirectTo: '/pessoas', pathMatch: 'full' }, // Página inicial redirecionada para a lista de pessoas
  { path: '**', redirectTo: '/pessoas' } // Redireciona qualquer rota não encontrada para a lista de pessoas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
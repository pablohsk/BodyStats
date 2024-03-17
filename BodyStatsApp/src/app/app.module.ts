import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaCreateComponent } from './views/pessoa-create/pessoa-create.component';
import { PessoaEditComponent } from './views/pessoa-edit/pessoa-edit.component';
import { PessoaDetailComponent } from './views/pessoa-detail/pessoa-detail.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PesoIdealPopupComponent } from './components/peso-ideal-popup/peso-ideal-popup.component';
import AppServerModule from './app.config.server';

@NgModule({
    declarations: [
      AppComponent,
      PessoaListComponent,
      PessoaCreateComponent,
      PessoaEditComponent,
      PessoaDetailComponent,
      PessoaFormComponent,
      PesoIdealPopupComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot([
        { path: 'pessoas', component: PessoaListComponent },
        { path: 'pessoas/create', component: PessoaCreateComponent },
        { path: 'pessoas/:id/edit', component: PessoaEditComponent },
        { path: 'pessoas/:id', component: PessoaDetailComponent },
        { path: 'calcular-peso-ideal', component: PesoIdealPopupComponent },
        { path: '', redirectTo: '/pessoas', pathMatch: 'full' },
        { path: '**', redirectTo: '/pessoas' }
      ]),
      AppServerModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
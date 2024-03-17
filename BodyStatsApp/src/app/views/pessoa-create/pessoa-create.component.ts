import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent {
  pessoa: Pessoa = {
    nome: '',
    data_nasc: new Date(),
    cpf: '',
    sexo: 'M',
    altura: 0,
    peso: 0
  };

  constructor(private pessoaService: PessoaService, private router: Router) { }

  submitForm(): void {
    this.pessoaService.incluirPessoa(this.pessoa).subscribe(() => {
      console.log('Pessoa criada com sucesso!');
      this.router.navigate(['/pessoas']);
    }, error => {
      console.error('Erro ao criar pessoa:', error);
    });
  }
}
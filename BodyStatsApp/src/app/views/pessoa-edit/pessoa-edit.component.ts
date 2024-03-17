import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit {
  pessoa: Pessoa | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.getPessoaDetail();
  }

  getPessoaDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) { // Verifica se id não é null ou undefined
      const parsedId = parseInt(id, 10); // Converte para número
      if (!isNaN(parsedId)) { // Verifica se a conversão foi bem-sucedida
        this.pessoaService.buscarPessoa(parsedId).subscribe((data: Pessoa | null) => {
          if (data) {
            this.pessoa = data;
          } else {
            console.error('Pessoa não encontrada.');
            // Você pode redirecionar para uma página de erro ou fazer outra ação adequada aqui
          }
        }, (error: any) => { // Tipando explicitamente o parâmetro error
          console.error('Erro ao buscar detalhes da pessoa:', error);
        });
      } else {
        console.error('ID da pessoa não é um número válido.');
        // Você pode redirecionar para uma página de erro ou fazer outra ação adequada aqui
      }
    } else {
      console.error('ID da pessoa não fornecido.');
      // Você pode redirecionar para uma página de erro ou fazer outra ação adequada aqui
    }
  }

  submitForm(): void {
    if (this.pessoa && this.pessoa.id !== undefined) {
      this.pessoaService.alterarPessoa(this.pessoa.id, this.pessoa).subscribe(() => {
        console.log('Pessoa atualizada com sucesso!');
        this.router.navigate(['/pessoas']);
      }, (error: any) => {
        console.error('Erro ao atualizar pessoa:', error);
      });
    } else {
      console.error('Pessoa ou ID inválido para atualização.');
    }
  }
}
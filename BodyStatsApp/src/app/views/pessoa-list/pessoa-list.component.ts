import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {
  pessoas: Pessoa[] = []; // Inicializando como um array vazio

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.listarPessoas();
  }

  listarPessoas(): void {
    this.pessoaService.listarPessoas().subscribe((data: Pessoa[]) => {
      this.pessoas = data;
    }, error => {
      console.error('Erro ao listar pessoas:', error);
    });
  }
}
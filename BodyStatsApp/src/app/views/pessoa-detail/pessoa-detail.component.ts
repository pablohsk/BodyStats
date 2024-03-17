import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.css']
})
export class PessoaDetailComponent implements OnInit {
  pessoa: Pessoa | null = null; // Inicialize a propriedade pessoa
    route: any;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.getPessoaDetail();
  }

  getPessoaDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pessoaService.buscarPessoa(+id).subscribe((data: Pessoa | null) => {
        this.pessoa = data;
      }, error => {
        console.error('Erro ao buscar detalhes da pessoa:', error);
      });
    }
  }
}
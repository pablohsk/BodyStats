import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {
  nome: string = ''; // Inicialize as propriedades no construtor ou atribua um valor padrão
  data_nasc: Date = new Date();
  cpf: string = '';
  sexo: string = '';
  altura: number = 0;
  peso: number = 0;

  constructor(private http: HttpClient) {}

  submitForm(): void {
    const pessoa = {
      nome: this.nome,
      data_nasc: this.data_nasc,
      cpf: this.cpf,
      sexo: this.sexo,
      altura: this.altura,
      peso: this.peso
    };

    this.http.post<any>('http://localhost:8000/pessoa/incluir/', pessoa)
      .subscribe(response => {
        console.log('Resposta do servidor:', response);
      }, error => {
        console.error('Erro ao enviar os dados para o servidor:', error);
      });
  }
}

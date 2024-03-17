import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8000/pessoa';

  constructor(private http: HttpClient) { }

  listarPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.baseUrl}`);
  }

  buscarPessoa(id: number): Observable<Pessoa | null> {
    return this.http.get<Pessoa>(`${this.baseUrl}/${id}`).pipe(
      catchError(error => {
        if (error.status === 404) {
          return of(null); // Retorna null se a pessoa não for encontrada
        }
        throw error; // Reenvia o erro para o observador
      })
    );
  }

  incluirPessoa(pessoa: Pessoa): Observable<any> {
    return this.http.post(`${this.baseUrl}/incluir/`, pessoa);
  }

  alterarPessoa(id: number, pessoa: Pessoa): Observable<any> {
    return this.http.put(`${this.baseUrl}/alterar/${id}`, pessoa);
  }

  excluirPessoa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/excluir/${id}`);
  }

  calcularPesoIdeal(nome: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/calcular-peso-ideal/${nome}`);
  }
}
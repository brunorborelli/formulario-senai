import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/API/API_CONFIG';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  formularioAtual!: Pessoa

  constructor(private httpClient: HttpClient) {
   }

  criarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpClient.post<Pessoa>(`${API_CONFIG.baseUrl}/pessoa`, pessoa);
  }

  getListPessoa(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(`${API_CONFIG.baseUrl}/pessoa`);
  }


  criarFormularioAtual(pessoa: Pessoa): void{
    this.formularioAtual = pessoa;
  }
  
  getFormularioAtual(): Pessoa{
    return this.formularioAtual;
  }
}

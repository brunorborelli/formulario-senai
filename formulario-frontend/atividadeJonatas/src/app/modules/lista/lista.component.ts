import { Component } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { CommonModule } from '@angular/common';
import { ServicoService } from '../servico.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  pessoas: Pessoa[] = [];

  constructor(private _service: ServicoService) { 
    this.findAll();
  }

  findAll() {
    this._service.getListPessoa().subscribe((resposta)=>{
      this.pessoas= resposta;
    })
  }
}

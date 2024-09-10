import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visualizacao.component.html',
  styleUrl: './visualizacao.component.css',
})
export class VisualizacaoComponent {
  pessoa: Pessoa;

  constructor(private _service: ServicoService, private _router: Router) {
    this.pessoa = this._service.getFormularioAtual();
  }

  enviarFormulario(): void {
    this._service.criarPessoa(this.pessoa).subscribe((response) => {
      this._router.navigate(['lista']);
    });
  }
}

import { Component } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pessoa } from '../../models/pessoa';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  personForm: FormGroup;

  constructor(
    private _service: ServicoService,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.personForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  enviarFormulario(): void {
    const pessoa = new Pessoa(this.personForm);
    this._service.criarFormularioAtual(pessoa);
    this._router.navigate(['visualizacao']);
  }
}

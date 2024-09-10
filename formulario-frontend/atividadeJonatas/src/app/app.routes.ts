import { Routes } from '@angular/router';
import { FormularioComponent } from './modules/formulario/formulario.component';
import { ListaComponent } from './modules/lista/lista.component';
import { VisualizacaoComponent } from './modules/visualizacao/visualizacao.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'formulario', pathMatch: 'full'
    },
    {
        path: 'formulario',component: FormularioComponent
    },
    {
        path: 'lista', component: ListaComponent
    },
    {
        path: 'visualizacao', component: VisualizacaoComponent
    }
];

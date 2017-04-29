import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ClientesComponent } from './clientes.component';
import { ClienteDetalhesComponent } from './cliente-detalhes.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'clienteDetalhes/:id', component: ClienteDetalhesComponent },
    { path: 'clientes', component: ClientesComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouteModule{}
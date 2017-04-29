import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './mock-Clientes';
import { ClienteService } from './cliente.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'my-clientes',
    styleUrls: ['./app/clientes.component.css'],
    templateUrl: './app/clientes.component.html'
})
export class ClientesComponent implements OnInit {
    clientes = CLIENTES;
    selectedCliente: Cliente;

    constructor(
        private clienteService: ClienteService,
        private router: Router) { }

    onSelect(cliente: Cliente): void {
        this.selectedCliente = cliente;
    }

    getClientes(): void {
        this.clienteService.getClientes().then(
            clientes => this.clientes = clientes
        );
    }

    ngOnInit(): void {
        this.getClientes();
    }

    gotoDetail(): void {
        this.router.navigate(['/clienteDetalhes', this.selectedCliente.id]);
    }
}

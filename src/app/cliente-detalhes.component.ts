import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
@Component({
    selector: 'cliente-detalhes',
    templateUrl: './app/cliente-detalhes.component.html',
    styleUrls: ['./app/cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {
    @Input() selectedCliente: Cliente;
    private cliente: Cliente;
    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute,
        private location: Location) {
    };

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.clienteService.getCliente(+params['id']))
            .subscribe(cliente => this.cliente = cliente);
    };

    goBack(): void {
        this.location.back();
    }

}

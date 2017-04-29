import { Component } from '@angular/core';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-dashboard',
  templateUrl: './app/dashboard.component.html',
  styleUrls: [ './app/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes()
      .then(clientes => this.clientes = clientes.slice(1, 5));
  }
}
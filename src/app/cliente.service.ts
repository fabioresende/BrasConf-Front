import { Injectable } from '@angular/core';

import { CLIENTES } from "./mock-Clientes";
import { Cliente } from "./Cliente";

@Injectable()
export class ClienteService {
    getClientes(): Promise<Cliente[]> {
        return Promise.resolve(CLIENTES);
    }; // stub
    getCliente(id: number): Promise<Cliente> {
        return this.getClientes()
            .then(cliente => cliente.find(cliente => cliente.id === id));
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
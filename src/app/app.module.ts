import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes.component';
import { ClienteDetalhesComponent } from './cliente-detalhes.component';
import { ClienteService } from './cliente.service';
import { DashboardComponent } from './dashboard.component';
import { HttpModule } from '@angular/http';
import {AppRouteModule} from './app-routing.module';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRouteModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ClientesComponent,
        ClienteDetalhesComponent,
        DashboardComponent
    ],
    providers: [
        ClienteService
    ],
    bootstrap: [
        AppComponent
    ],

})
export class AppModule {

}

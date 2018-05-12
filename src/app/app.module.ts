import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import{environment} from '../environments/environment';
import {ClientesComponent}  from './clientes/clientes.component';
import {ClienteComponent}  from './clientes/cliente/cliente.component';
import {ClienteListComponent}  from './clientes/cliente-list/cliente-list.component';
import{ ToastrModule, Toast}from 'ngx-toastr';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { TrabajadoresListComponent } from './trabajadores/trabajadores-list/trabajadores-list.component';
import { TrabajadorComponent } from './trabajadores/trabajador/trabajador.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    ClienteListComponent,
    TrabajadoresComponent,
    TrabajadoresListComponent,
    TrabajadorComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

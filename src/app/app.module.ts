import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFireAuthModule } from 'angularfire2/auth';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import{environment} from '../environments/environment';

import {ClientesComponent}  from './clientes/clientes.component';
import {ClienteComponent}  from './clientes/cliente/cliente.component';
import {ClienteListComponent}  from './clientes/cliente-list/cliente-list.component';

import{ ToastrModule, Toast}from 'ngx-toastr';

import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { TrabajadoresListComponent } from './trabajadores/trabajadores-list/trabajadores-list.component';
import { TrabajadorComponent } from './trabajadores/trabajador/trabajador.component';

import { InicioComponent } from './inicio/inicio.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'trabajadores',
    component: TrabajadoresComponent,
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    ClienteListComponent,
    TrabajadoresComponent,
    TrabajadoresListComponent,
    TrabajadorComponent,
    InicioComponent,
    NotFoundComponent
  ],
  imports: [MatButtonModule,
     MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

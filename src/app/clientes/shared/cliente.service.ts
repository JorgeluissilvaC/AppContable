import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Cliente } from './cliente.model';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clienteList: AngularFireList<any>;
  selectedCliente: Cliente = new Cliente();
  constructor(private fireBase: AngularFireDatabase) {

   }
   getData() {
   this.clienteList = this.fireBase.list('clientes');
   return this.clienteList;
  }
  insertCliente(cliente: Cliente) {
    this.clienteList.push({
      Tipo: cliente.Tipo,
      Nombres: cliente.Nombres,
      Apellidos: cliente.Apellidos,
      CC: cliente.CC,
      DepartamentoR: cliente.DepartamentoR,
      CiudadR: cliente.CiudadR,
      DireccionR: cliente.DireccionR,
      DepartamentoS: cliente.DepartamentoS,
      CiudadS: cliente.CiudadS,
      DireccionS: cliente.DireccionS,
      Telefono: cliente.Telefono,
      Extencion: cliente.Extencion,
      TelFR: cliente.TelFR,
      Celular: cliente.Celular,
      FormaJ: cliente.FormaJ,
      NIT: cliente.NIT,
      NombreEmpresa: cliente.NombreEmpresa
    });
  }

  updateCliente(cliente: Cliente) {
   this.clienteList.update(cliente.$key, {
    Tipo: cliente.Tipo,
    Nombres: cliente.Nombres,
    Apellidos: cliente.Apellidos,
    CC: cliente.CC,
    DepartamentoR: cliente.DepartamentoR,
    CiudadR: cliente.CiudadR,
    DireccionR: cliente.DireccionR,
    DepartamentoS: cliente.DepartamentoS,
    CiudadS: cliente.CiudadS,
    DireccionS: cliente.DireccionS,
    Telefono: cliente.Telefono,
    Extencion: cliente.Extencion,
    TelFR: cliente.TelFR,
    Celular: cliente.Celular,
    FormaJ: cliente.FormaJ,
    NIT: cliente.NIT,
    NombreEmpresa: cliente.NombreEmpresa
   });
  }
  deleteCliente($key: string) {
    this.clienteList.remove($key);
  }

  searchCliente(start: string, end: string): AngularFireList<any> {
    return this.fireBase.list('/clientes', ref => ref.limitToFirst(10).orderByChild('Nombres').startAt(start).endAt(end));
  }
}

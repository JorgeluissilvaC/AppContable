import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Trabajador} from './trabajador.model';
@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  trabajadorList: AngularFireList<any>;
  selectedTrabajador: Trabajador = new Trabajador();
  constructor(private fireBase: AngularFireDatabase) {
  }
  getData() {
   this.trabajadorList = this.fireBase.list('trabajadores');
   return this.trabajadorList;
  }
  insertTrabajador(trabajador: Trabajador) {
    this.trabajadorList.push({
      Nombre: trabajador.Nombre,
      Apellido: trabajador.Apellido,
      CC: trabajador.CC,
      Teléfono: trabajador.Telefono,
      Direccion: trabajador.Direccion
        });
  }

  updateTrabajador(trabajador: Trabajador) {
   this.trabajadorList.update(trabajador.$key, {
    Nombre: trabajador.Nombre,
    Apellido: trabajador.Apellido,
    CC: trabajador.CC,
    Teléfono: trabajador.Telefono,
    Direccion: trabajador.Direccion
   });
  }
  deleteTrabajador($key: string) {
    this.trabajadorList.remove($key);
  }
}

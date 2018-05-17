import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Servicio } from './servicio.model';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  serviciosList: AngularFireList<any>;
  selectedServicio: Servicio = new Servicio();
  constructor(private fireBase: AngularFireDatabase) { }

  getData() {
    this.serviciosList = this.fireBase.list('servicios');
    return this.serviciosList;
  }

  insertServicio(servicio: Servicio) {
    this.serviciosList.push({
      Remision: servicio.Remision,
      Fecha: servicio.Fecha,
      Cliente: servicio.Cliente,
      Direccion: servicio.Direccion,
      Area: servicio.Area,
      Tipo: servicio.Tipo,
      Tecnico: servicio.Tecnico,
      Observacion: servicio.Observacion,
      Factura: servicio.Factura,
    });
  }

  updateServicio(servicio: Servicio) {
    this.serviciosList.update(servicio.$key, {
      Remision: servicio.Remision,
      Fecha: servicio.Fecha,
      Cliente: servicio.Cliente,
      Direccion: servicio.Direccion,
      Area: servicio.Area,
      Tipo: servicio.Tipo,
      Tecnico: servicio.Tecnico,
      Observacion: servicio.Observacion,
      Factura: servicio.Factura,
    });
  }

  deleteServicio($key: string) {
    this.serviciosList.remove($key);
  }
}

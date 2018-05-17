import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../shared/servicio.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  constructor(private servicioService: ServicioService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.servicioService.getData();
  }

  onSubmit(servicioForm: NgForm) {
    if (servicioForm.value.$key == null) {
      this.servicioService.insertServicio(servicioForm.value);
      this.toastr.success('Registro Exitoso', 'Servicio registrado');
    } else {
      this.servicioService.updateServicio(servicioForm.value);
      this.toastr.success('Registro Exitoso', 'Servicio Actulizado');
    }
    this.resetForm(servicioForm);
  }

  resetForm(servicioForm?: NgForm) {
    if (servicioForm != null) {
      servicioForm.reset();
    }

    this.servicioService.selectedServicio = {
      $key: null,
      Remision: 0,
      Fecha: '',
      Cliente: '',
      Direccion: '',
      Area: '',
      Tipo: '',
      Tecnico: '',
      Observacion: '',
      Factura: '',
    };
  }
}

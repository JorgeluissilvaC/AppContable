import { Component, OnInit } from '@angular/core';
import{TrabajadorService} from '../share/trabajador.service';
import { NgForm } from '@angular/forms';
import{ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {


  constructor(private trabajadorServices:TrabajadorService,private tostr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    //this.tostr.success("Entré","Bebé");
  }

onSubmit(trabajadorForm:NgForm){
  
if(trabajadorForm==null){
this.trabajadorServices.insertTrabajador(trabajadorForm.value);
this.tostr.success("Registro Exitoso","Cliente registrado");
}else{
this.trabajadorServices.updateTrabajador(trabajadorForm.value);
this.tostr.success("Registro Exitoso","Cliente Actulizado");
}
this.resetForm(trabajadorForm);


}
resetForm(trabajadorForm?:NgForm){
  if(trabajadorForm!= null) trabajadorForm.reset;

this.trabajadorServices.selectedTrabajador={
  $key    :null,
  Nombre:'',
  Apellido  :'',
  CC  :0,
  Direccion:'',
  Telefono:0
}
}
}

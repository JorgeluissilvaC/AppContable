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


  constructor(private trabajadorService:TrabajadorService,private tostr:ToastrService) { }

  ngOnInit() {
    
    this.resetForm();

  }
onSubmit(ClienteForm:NgForm){
if(ClienteForm==null){
this.trabajadorService.insertTrabajador(ClienteForm.value);
this.tostr.success("Registro Exitoso","Cliente registrado");
}else{
this.trabajadorService.updateTrabajador(ClienteForm.value);
this.tostr.success("Registro Exitoso","Cliente Actulizado");
}
this.resetForm(ClienteForm);


}
resetForm(ClienteForm?:NgForm){
  if(ClienteForm!= null) ClienteForm.reset;

this.trabajadorService.selectedTrabajador={
  $key    :null,
  Nombre:'',
  Apellido  :'',
  CC  :0,
  Direccion:'',
  Telefono:0
}
}
}

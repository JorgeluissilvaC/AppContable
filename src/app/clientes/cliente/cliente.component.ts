import { Component, OnInit } from '@angular/core';
import{ClienteService} from '../shared/cliente.service';
import { NgForm } from '@angular/forms';
import{ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private clienteServices:ClienteService,private tostr:ToastrService) { }

  ngOnInit() {
    
    this.resetForm();

  }
onSubmit(ClienteForm:NgForm){
if(ClienteForm==null){
this.clienteServices.insertCliente(ClienteForm.value);
this.tostr.success("Registro Exitoso","Cliente registrado");
}else{
this.clienteServices.updateCliente(ClienteForm.value);
this.tostr.success("Registro Exitoso","Cliente Actulizado");
}
this.resetForm(ClienteForm);


}
resetForm(ClienteForm?:NgForm){
  if(ClienteForm!= null) ClienteForm.reset;

this.clienteServices.selectedCliente={
  $key    :null,
  name    :'',
  position:'',
  office  :'',
  salary  :0,
}
}
}

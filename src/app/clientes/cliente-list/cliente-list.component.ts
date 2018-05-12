import { Component, OnInit } from '@angular/core';
import{ClienteService} from '../shared/cliente.service';
import{Cliente} from '../shared/cliente.=model';
import { element } from 'protractor';
import{ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  ClientesList : Cliente[];
  constructor(private clienteServices:ClienteService,private tostr:ToastrService) { }
  ngOnInit() {
    var x = this.clienteServices.getData();
    x.snapshotChanges().subscribe(item=>{ 
      this.ClientesList=[]
      item.forEach(element =>{
        var y =element.payload.toJSON();
        y["$key"]=element.key;
        this.ClientesList.push(y as Cliente);
      });
    });
  }
  onEdit(cli:Cliente){
    this.clienteServices.selectedCliente = Object.assign({},cli);
  }
  onDelete($key:string){
    if(confirm('¿Esta seguro que desea borrar el cliente?')==true){
       this.clienteServices.deleteCliente($key);
    this.tostr.warning("Cliente borrado correctamente","Cliente registrado")
    }
   
  }
}

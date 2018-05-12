import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from'angularfire2/database';
import{Cliente}from'./cliente.=model';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clienteList:AngularFireList<any>;
  selectedCliente:Cliente =new Cliente();
  constructor(private fireBase :AngularFireDatabase) {

   }
   getData(){
   this.clienteList = this.fireBase.list('clientes');
   return this.clienteList;   
  }
  insertCliente(cliente:Cliente){
    this.clienteList.push({
      name    :cliente.name,
      position:cliente.position,
      office  :cliente.office,
      salary  :cliente.salary
    });
  }

  updateCliente(cliente:Cliente){
   this.clienteList.update(cliente.$key,{
    name    :cliente.name,
    position:cliente.position,
    office  :cliente.office,
    salary  :cliente.salary
   });
  }
  deleteCliente($key:string){
    this.clienteList.remove($key);
  }
  
  }

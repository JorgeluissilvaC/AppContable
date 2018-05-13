import { Component, OnInit } from '@angular/core';
import{TrabajadorService} from '../share/trabajador.service';
import{Trabajador} from '../share/trabajador.model';
import { element } from 'protractor';
import{ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-trabajadores-list',
  templateUrl: './trabajadores-list.component.html',
  styleUrls: ['./trabajadores-list.component.css']
})
export class TrabajadoresListComponent implements OnInit {

  TrabajadorList : Trabajador[];
  constructor(private trabajadorServices:TrabajadorService,private tostr:ToastrService) { }
  ngOnInit() {
    var x = this.trabajadorServices.getData();
    x.snapshotChanges().subscribe(item=>{ 
      this.TrabajadorList=[]
      item.forEach(element =>{
        var y =element.payload.toJSON();
        y["$key"]=element.key;
        this.TrabajadorList.push(y as Trabajador);
      });
    });
  }
  onEdit(cli:Trabajador){
    this.trabajadorServices.selectedTrabajador = Object.assign({},cli);
  }
  onDelete($key:string){
    if(confirm('¿Esta seguro que desea borrar el Trabajador?')==true){
       this.trabajadorServices.deleteTrabajador($key);
    this.tostr.warning("Trabajador borrado correctamente","Trabajador registrado")
    }
   
  }
}

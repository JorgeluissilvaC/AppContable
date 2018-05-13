import { Component, OnInit } from '@angular/core';
import{TrabajadorService} from '../share/trabajador.service';
import{Trabajador} from '../share/trabajador.model';
import{ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-trabajadores-list',
  templateUrl: './trabajadores-list.component.html',
  styleUrls: ['./trabajadores-list.component.css']
})
export class TrabajadoresListComponent implements OnInit {

  TrabajadorList: Trabajador[];
  constructor(private trabajadorServices: TrabajadorService, private tost: ToastrService) { }
  ngOnInit() {
    let x = this.trabajadorServices.getData();
    x.snapshotChanges().subscribe((item) => {
      this.TrabajadorList = [];
      item.forEach((Element) => {
       const y = Element.payload.toJSON();
        y["$key"] = Element.key;
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

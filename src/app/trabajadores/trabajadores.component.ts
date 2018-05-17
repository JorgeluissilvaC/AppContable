import { Component, OnInit } from '@angular/core';
import {TrabajadorService} from './share/trabajador.service';
@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css'],
  providers: [TrabajadorService]
})
export class TrabajadoresComponent implements OnInit {

  constructor(private trabajadorServices: TrabajadorService) { }

  ngOnInit() {
  }

}

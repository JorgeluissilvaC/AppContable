import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { ClienteService } from '../clientes/shared/cliente.service';
import { Cliente } from '../clientes/shared/cliente.model';
import { MaterializeDirective } from 'angular2-materialize';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  searchResultsS: Cliente[];
  lastKeypress = 0;
  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
  }

  search($event) {
    const q = $event.target.value;
    if (q !== '') {
      if ($event.timeStamp - this.lastKeypress > 200) {
        this.clienteService.searchCliente(q, q + 'uf8ff').snapshotChanges()
          .subscribe(clientes => {
            this.searchResultsS = [];
            clientes.forEach(El => {
              const y = El.payload.toJSON();
              y['$key'] = El.key;
              this.searchResultsS.push(y as Cliente);
            });
            console.log(this.searchResultsS);
          });
      }
    } else {
      this.searchResultsS = [];
    }
  }
}

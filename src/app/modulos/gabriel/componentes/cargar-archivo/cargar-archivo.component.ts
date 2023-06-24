import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cargar-archivo',
  templateUrl: './cargar-archivo.component.html',
  styleUrls: ['./cargar-archivo.component.css']
})
export class CargarArchivoComponent {

  constructor(
    private router:Router,
    private _route: ActivatedRoute) { }

  toTraduccion(){
    this.router.navigate(['/Gabriel/resumen']);
  }
}

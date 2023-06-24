import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router:Router,
    private _route: ActivatedRoute) { }

  toRegistro(){
    this.router.navigate(['/Gabriel/registro']);
  }

  toCargar(){
    this.router.navigate(['/Gabriel/cargar-archivo']);
  }


}

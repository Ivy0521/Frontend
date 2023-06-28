import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent {

  constructor(
    private router:Router,
    private _route: ActivatedRoute) { }

  public isLogin: Boolean = false

  toRegistro(){
    this.router.navigate(['/access/registro']);
  }

  toCargar(){    
    this.router.navigate(['/access/cargar-archivo']);
  }

}

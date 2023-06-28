import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(
    private router:Router,
    private _route: ActivatedRoute) { }

  toNosotros(){
    this.router.navigate(['/access/nosotros']);
  }

  toCargar(){
    this.router.navigate(['/access/cargar-archivo']);
  }
}

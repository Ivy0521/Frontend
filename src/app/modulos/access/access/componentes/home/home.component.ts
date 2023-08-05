import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router:Router,
    private _route: ActivatedRoute) { }


    toChat(){
      this.router.navigate(['/access/chat']);
    }
}

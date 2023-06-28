import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {

  public isResumen: Boolean = false;

  mostrarResumen(){
    if(this.isResumen == false){
      this.isResumen = true
    }
  }

  ocultarResumen(){
    if(this.isResumen == true){
      this.isResumen = false
    }
  }

}

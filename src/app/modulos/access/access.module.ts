import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './access/componentes/registro/registro.component';
import { CargarArchivoComponent } from './access/componentes/cargar-archivo/cargar-archivo.component';
import { RouterModule } from '@angular/router';
import { LoginsComponent } from './access/componentes/logins/logins.component';


import { NgxFileDropModule } from 'ngx-file-drop';
import { TopbarComponent } from '../gabriel/componentes/topbar/topbar.component';
import { NosotrosComponent } from './access/componentes/nosotros/nosotros.component';
import { ResumenComponent } from './access/componentes/resumen/resumen.component';

import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

const router = RouterModule.forChild([
  // rutas principal
  {path: 'registro', component: RegistroComponent},
  {path: 'logins', component: LoginsComponent},
  {path: 'cargar-archivo', component: CargarArchivoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'resumen', component: ResumenComponent}
])



@NgModule({
  declarations: [
    RegistroComponent,
    LoginsComponent,
    CargarArchivoComponent,
    NosotrosComponent,
    ResumenComponent
  ],
  imports: [
    CommonModule,
    router,
    NgxFileDropModule,
    TopbarComponent,
    NgbPaginationModule, 
    NgbAlertModule
  ]
})
export class AccessModule { }

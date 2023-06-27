import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RouterModule } from '@angular/router';
import { CargarArchivoComponent } from './componentes/cargar-archivo/cargar-archivo.component';
import { TopbarComponent } from './componentes/topbar/topbar.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';

import { NgxFileDropModule } from 'ngx-file-drop';


const router = RouterModule.forChild([
  // rutas principal
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'cargar-archivo', component: CargarArchivoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'resumen', component: ResumenComponent}
  // {path: 'alabanzas/list', component: AllAlabanzasComponent},
  // {path: 'alabanzas/create', component: CreateAlabanzasComponent},
  // {path: 'alabanzas/update', component: UpdateAlabanzasComponent},
  // {path: 'alabanzas/detail/:idAlabanza', component: DetailComponent},  


])

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    CargarArchivoComponent,
    NosotrosComponent,
    ResumenComponent
  ],
  imports: [
    CommonModule,
    router,
    NgxFileDropModule
  ]
})
export class GabrielModule { }

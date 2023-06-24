import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RouterModule } from '@angular/router';
import { CargarArchivoComponent } from './componentes/cargar-archivo/cargar-archivo.component';
import { TopbarComponent } from './componentes/topbar/topbar.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';


const router = RouterModule.forChild([
  // rutas principal
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'cargar-archivo', component: CargarArchivoComponent},
  {path: 'nosotros', component: NosotrosComponent},
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
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    router,
  ]
})
export class GabrielModule { }

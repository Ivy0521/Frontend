import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'Gabriel/login'},
  // {path: 'Gabriel/login', loadChildren: () => import('./modulos/gabriel/gabriel.module').then(t => t.GabrielModule)},
  // {path: 'Gabriel/login', children:[
  //   {path: '',loadChildren: () => import('./modulos/gabriel/gabriel.module').then(t => t.GabrielModule)}
  // ]
  // },

  {
    path: 'Gabriel', children: [
      { path: '', loadChildren: () => import('./modulos/gabriel/gabriel.module').then(t => t.GabrielModule) }
    ]
  },
  // {
  //   path: 'MSN', children: [
  //     {path: '', loadChildren: () => import('./modules/compositor/compositor.module').then(t=>t.CompositorModule)}
  //   ]
  // },
 
];




@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

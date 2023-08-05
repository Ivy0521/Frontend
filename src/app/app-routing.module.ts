import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'access/home'},
  {path: 'access', children: [
    {path: '',loadChildren: () => import('./modulos/access/access.module').then(t => t.AccessModule)}
  ]
  },
  {
    path: 'gabriel', children: [
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SafePipeModule } from 'safe-pipe';
import { FormsModule } from '@angular/forms';

import { NgxFileDropModule } from 'ngx-file-drop';
import { TopbarComponent } from '../gabriel/componentes/topbar/topbar.component';
import { NosotrosComponent } from './access/componentes/nosotros/nosotros.component';

import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './access/componentes/chat/chat.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HomeComponent } from './access/componentes/home/home.component';

const router = RouterModule.forChild([
  // rutas principal
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'home', component: HomeComponent}
])



@NgModule({
  declarations: [
    NosotrosComponent,
    ChatComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    router,
    NgxFileDropModule,
    TopbarComponent,
    NgbPaginationModule, 
    NgbAlertModule,
    SafePipeModule,
    PdfViewerModule,
    FormsModule
  ]
})
export class AccessModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModel, FormControl, FormsModule} from '@angular/forms';
import { ReactiveFormsModule, NgForm} from '@angular/forms'
import { NgFor, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { GabrielComponent } from './modulos/gabriel/gabriel.component';
import { TopbarComponent } from './modulos/gabriel/componentes/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    TopbarComponent,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { NgModule } from '@angular/core';
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





@NgModule({
  declarations: [
    AppComponent,
    GabrielComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

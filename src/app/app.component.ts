import { Component, OnInit, ViewChild, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './modulos/access/access/service/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gabriel';
    
  showAlert = false;
  message = '';

  
  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.alert$.subscribe( (res: any) =>  {
      this.message = res.message;
      this.showAlert = true;
      setTimeout(() => {this.showAlert = false}, res.time)

    })
  }
}

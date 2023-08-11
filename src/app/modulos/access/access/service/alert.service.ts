import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSource = new Subject();
  alert$ = this.alertSource.asObservable();

  constructor() { }

  showAlert(message: string, time: number = 3000) {
    this.alertSource.next({message, time});
  }

  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = '../../../../../assets/script.js';
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}

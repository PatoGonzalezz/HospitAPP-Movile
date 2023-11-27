import { Component, OnInit } from '@angular/core';
import { EmailComposer, EmailComposerOptions } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  async openEmail(){
    const email: EmailComposerOptions = {
      to: 'pat12lc@gmail.com',
      subject: 'Mi último viaje',
      body: 'Este fue el último viaje que realicé a "SAPU Eduardo Frei", te dejo el maps para que lo abras. https://maps.app.goo.gl/iyxVbutfustchHLG6',
    };
    await this.emailComposer.open(email);
  }
  
}

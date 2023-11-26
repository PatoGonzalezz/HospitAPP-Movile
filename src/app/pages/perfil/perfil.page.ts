import { Component, OnInit, inject } from '@angular/core';
import { ServicerestService } from 'src/app/services/servicerest.service';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  comparedWith:any;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService)

  constructor() {
  }

  sistemas =  ['Isapre', 'Fonasa']

  ngOnInit() {
  }

  user = JSON.parse(localStorage.getItem('user'));
    

}

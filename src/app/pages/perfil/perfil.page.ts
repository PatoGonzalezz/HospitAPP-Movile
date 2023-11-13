import { Component, OnInit } from '@angular/core';
import { ServicerestService } from 'src/app/services/servicerest.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  users:any;
  user:any={
    id: null,
    nombre: "",
    username: "",
    password: ""
  };

  comparedWith:any;


  constructor(private api:ServicerestService) {
    this.getUserList(); 
  }

  getUser(userId: any) {
    this.api.getUser(userId).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

  getUserList() {
    this.api.getUserList().subscribe((data) => {
      console.log(data);
      this.users = data;

    });
  }

  sistemas =  ['Isapre', 'Fonasa']

  ngOnInit() {
  }

}

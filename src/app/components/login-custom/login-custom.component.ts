import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-custom',
  templateUrl: './login-custom.component.html',
  styleUrls: ['./login-custom.component.scss'],
})
export class LoginCustomComponent  implements OnInit {

  @Input() control!: FormControl;
  @Input() type!: string;
  @Input() label!: string;
  @Input() autocomplete!: string;
  @Input() icon!: string;

  isPassword!: boolean;
  hide: boolean = true;

  constructor() { }

  ngOnInit() {}

  shorOrHidePassword(){

    this.hide = !this.hide;
    if (this.hide) this.type = 'password';
    else this.type = 'text';
  }

}

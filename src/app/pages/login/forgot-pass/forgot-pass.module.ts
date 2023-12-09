import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/components/shared.module';
import { ForgotPassPageRoutingModule } from './forgot-pass-routing.module';

import { ForgotPassPage } from './forgot-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ForgotPassPage]
})
export class ForgotPassPageModule {}

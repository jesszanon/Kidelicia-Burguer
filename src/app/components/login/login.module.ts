import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { CardUserComponent } from './card-user/card-user.component';
import { RememberPassComponent } from './remember-pass/remember-pass.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    CardUserComponent,
    RememberPassComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

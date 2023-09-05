import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SignInComponent
  ],
  exports : [
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SignInComponent }
    ]),
    FormsModule,
  ]
})
export class LoginModule { }

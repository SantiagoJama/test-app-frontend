import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentUsersComponent } from './current-users/current-users.component';
import { NavbarComponent } from '../shared-components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    CurrentUsersComponent,
    //NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CurrentUsersComponent }
    ]),
    TableModule,
  ]
})
export class UserModule { }

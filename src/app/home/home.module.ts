import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared-components/navbar/navbar.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductComponent,
    NavbarComponent
  ],
  exports : [
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductComponent }
    ]),
    TableModule,
    DialogModule,
    FormsModule,
  ]
})
export class HomeModule { }

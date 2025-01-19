import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationAlertComponent } from '../shared/confirmation-alert/confirmation-alert.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductEditorComponent,
    ProductListComponent,
    LoginComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ConfirmationAlertComponent]
})
export class FeaturesModule { }

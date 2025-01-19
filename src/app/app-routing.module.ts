import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { AddProductComponent } from './features/add-product/add-product.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { ProductEditorComponent } from './features/product-editor/product-editor.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'edit/:id', component: ProductEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

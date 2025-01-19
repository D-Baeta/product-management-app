import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { ConfirmationAlertComponent } from '../../shared/confirmation-alert/confirmation-alert.component';   // Import AlertComponent

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(ConfirmationAlertComponent) confirmationAlertComponent!: ConfirmationAlertComponent;
  products: any[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate([`/details/${id}`]);
  }

  addProduct(): void {
    this.router.navigate([`/addProduct`]);
  }


  editProduct(id: number): void {
    this.router.navigate([`/edit/${id}`]);
  }

  confirmDelete(id: number) {
    this.confirmationAlertComponent.showAlertMessage('Are you sure you want to delete this product?');

    this.confirmationAlertComponent.confirmAction.subscribe((confirmed) => {
      if (confirmed) {
        this.apiService.deleteProduct(id).subscribe(() => {
          this.loadProducts();
        });
      }
    });
  }
}

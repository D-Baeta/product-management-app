import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { ConfirmationAlertComponent } from '../../shared/confirmation-alert/confirmation-alert.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild(ConfirmationAlertComponent) confirmationAlertComponent!: ConfirmationAlertComponent;
  load: boolean = false;
  product: any;
  productIndex: number = 0;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.loadProductDetails(productId);
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  loadProductDetails(id: number): void {
    this.apiService.getProductDetails(id).subscribe((data) => {
      this.load = true;
      this.product = data;
      this.productIndex = this.product.id;
    });
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  editProduct(): void {
    this.router.navigate([`/edit/${this.product.id}`]);
  }

  confirmDelete() {
    this.confirmationAlertComponent.showAlertMessage('Are you sure you want to delete this product?');

    this.confirmationAlertComponent.confirmAction.subscribe((confirmed) => {
      if (confirmed) {
        this.apiService.deleteProduct(this.product.id).subscribe(() => {
          this.router.navigate(['/products']);
        });
      }
    });
  }
}

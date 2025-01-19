import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nonNegativeValidator } from '../../shared/custom-validation.component';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
  productForm: FormGroup;
  productId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: [null, Validators.required],
      description: [''],
      cost: [null, [Validators.required, Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/), nonNegativeValidator]],
      profile: this.fb.group({
        type: ['furniture'],
        available: [true],
        backlog: [null, nonNegativeValidator],
        customProperties: [[]]
      }),
    });
  }

  ngOnInit(): void {
    this.productId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    if (this.productId) {
      this.apiService.getProductDetails(this.productId).subscribe(data => {
        this.productForm.patchValue(data);
      });
    }
  }

  save(): void {
    if (this.productForm.valid) {
      const updatedProduct = { id: this.productId, ...this.productForm.value };
      if (this.productId !== null) {
        console.log(updatedProduct)
        this.apiService.updateProduct(this.productId, updatedProduct).subscribe(() => {
          this.router.navigate([`/products`]);
        });
      } else {
        console.error('Product ID is null. Cannot update product.');
      }
    }
  }

  goBack(): void {
    this.router.navigate([`/details/${this.productId}`]);
  }

  updateCustomProperties(customProperties: { [key: string]: string }): void {
    this.productForm.get('profile')?.patchValue({ customProperties });
  }
}

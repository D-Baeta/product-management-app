import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: [null, Validators.required],
      description: [''],
      sku: [null, Validators.required],
      cost: [null, [Validators.required, Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/), this.nonNegativeValidator]],
      profile: this.fb.group({
        type: ['furniture'],
        available: [true, Validators.required],
        backlog: [null, [this.nonNegativeValidator]],
        customProperties: [[]]
      }),
    });
  }

  save(): void {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;

      this.apiService.createProduct(newProduct).subscribe(() => {
        this.router.navigate([`/products`]);
      });
    }
    console.log(this.productForm.valid)
  }

  goBack(): void {
    this.router.navigate([`/products`]);
  }

  updateCustomProperties(customProperties: { [key: string]: string }): void {
    this.productForm.get('profile')?.patchValue({ customProperties });
  }

  nonNegativeValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value < 0) {
      return { negative: true };
    }
    return null;
  }

}

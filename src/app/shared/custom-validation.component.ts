import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nonNegativeValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value < 0) {
    return { negative: true };
  }
  return null;
}

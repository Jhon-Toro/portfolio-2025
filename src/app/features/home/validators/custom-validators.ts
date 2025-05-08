import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static namePattern(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      const valid = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]*$/.test(value);
      return valid ? null : { invalidName: true };
    };
  }

  static messagePattern(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      const valid = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?()-]*$/.test(value);
      return valid ? null : { invalidMessage: true };
    };
  }

  static subjectPattern(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
  
      const valid = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?():;"'-]*$/.test(value);
      return valid ? null : { invalidSubject: true };
    };
  }
}

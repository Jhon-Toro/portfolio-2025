import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap, catchError } from 'rxjs/operators';

export function emailAsyncValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }

    return of(control.value).pipe(
      debounceTime(500),
      switchMap((email) => {
        const isEmailTaken = email === 'test@example.com';
        return isEmailTaken ? of({ emailTaken: true }) : of(null);
      }),
      catchError(() => of(null))
    );
  };
}

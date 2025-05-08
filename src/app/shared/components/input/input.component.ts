import { Component, Input, forwardRef, inject, input, signal } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  readonly #sanatizer = inject(DomSanitizer);
  readonly label = input<string>('');
  readonly type = input<string>('text');
  readonly control = input<AbstractControl>();
  readonly placeholder = input<string>('');
  readonly errorMessages = input<{ [key: string]: string }>({});
  readonly showErrors = input<boolean>(false);
  readonly inputId: string = `input-${Math.random().toString(36).slice(2, 11)}`;
  readonly value = signal<string>('');
  readonly disabled = signal<boolean>(false);
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const sanitizedValue = this.sanitizeInput(input.value);
    this.value.set(sanitizedValue);
    this.onChange(sanitizedValue);
    this.onTouched();
    this.control()!.markAsPristine();
  }

  sanitizeInput(value: string): string {
    const safeValue: SafeHtml = this.#sanatizer.sanitize(0, value) || '';
    return safeValue.toString();
  }

  getErrorMessage(): string {
    const control = this.control();
    if (control?.errors) {
      const errorKey = Object.keys(control.errors)[0];
      return this.errorMessages()[errorKey] || 'Error desconocido';
    }
    return '';
  }
}
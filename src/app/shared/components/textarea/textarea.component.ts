import { Component, Input, forwardRef, inject, input, signal } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  readonly #sanatizer = inject(DomSanitizer);
  readonly label = input<string>('');
  readonly control = input<AbstractControl>();
  readonly placeholder = input<string>('');
  readonly errorMessages = input<{ [key: string]: string }>({});
  readonly showErrors = input<boolean>(false);
  readonly value = signal<string>('');
  readonly disabled = signal<boolean>(false);
  readonly textareaId: string = `textarea-${Math.random().toString(36).substr(2, 9)}`;
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
    const textarea = event.target as HTMLTextAreaElement;
    const sanitizedValue = this.sanitizeInput(textarea.value);
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
    if (this.control()?.errors) {
      const errorKey = Object.keys(this.control()!.errors || {})[0];
      return this.errorMessages()[errorKey] || 'Error desconocido';
    }
    return '';
  }
}
import {
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from '../../../../core/services/contact/contact.service';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { TextareaComponent } from '../../../../shared/components/textarea/textarea.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CustomValidators } from '../validators/custom-validators';
import { ERROR_MESSAGES } from './data/contact-form-errors';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContactFormData } from '../../../../core/services/contact/interfaces/contact-form-data/ContactFormData.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
  ],
})
export class ContactFormComponent {
  readonly #formBuilder = inject(FormBuilder);
  readonly #contactService = inject(ContactService);
  readonly isSubmitted = signal<boolean>(false);
  readonly isSuccess = signal<boolean>(false);
  readonly isLoading = signal<boolean>(false);
  readonly errorMessages = ERROR_MESSAGES;
  readonly contactForm = this.#formBuilder.group({
    name: ['', [Validators.required, CustomValidators.namePattern()]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required, CustomValidators.subjectPattern],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
        CustomValidators.messagePattern(),
      ],
    ],
  });

  readonly formValue = toSignal(this.contactForm.valueChanges, {
    initialValue: this.contactForm.value,
  });

  async onSubmit(): Promise<void> {
    this.isSubmitted.set(true);
    if (!this.contactForm.valid) return;

    this.isLoading.set(true);

    try {
      await firstValueFrom(
        this.#contactService.sendContactForm(
          this.contactForm.getRawValue() as ContactFormData
        )
      );

      this.isSuccess.set(true);
      this.contactForm.reset();
      this.isSubmitted.set(false);

      setTimeout(() => this.isSuccess.set(false), 5000);
    } catch (err) {
      console.error('Error al enviar el formulario:', err);
    } finally {
      this.isLoading.set(false);
    }
  }
}

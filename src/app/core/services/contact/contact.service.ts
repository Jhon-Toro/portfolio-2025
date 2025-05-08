import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactFormData } from './interfaces/contact-form-data/ContactFormData.interface';
import { ContactResponse } from './interfaces/contact-response/ContactResponse.interface';

@Injectable({
  providedIn: 'root',
})

export class ContactService {
  readonly apiUrl = 'http://localhost:3000/api/contact';
  readonly #httpClient = inject(HttpClient);

  sendContactForm(data: ContactFormData): Observable<ContactResponse> {
    return this.#httpClient.post<ContactResponse>(this.apiUrl, data);
  }
}
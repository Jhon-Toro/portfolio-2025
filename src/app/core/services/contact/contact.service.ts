import { Injectable } from '@angular/core';
import { ContactFormData } from './interfaces/contact-form-data/ContactFormData.interface';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private serviceId = 'service_m0wr5se';
  private templateId = 'template_gs1ta4r';
  private userId = 'gFdLv8_3At5i2-X1f';

  sendContactForm(data: ContactFormData): Observable<EmailJSResponseStatus> {
    return from(
      emailjs.send(
        this.serviceId,
        this.templateId,
        data as unknown as Record<string, unknown>, 
        this.userId
      )
    );
  }
}

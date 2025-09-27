import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  // NOTE: You would typically inject FormBuilder, FormsModule, or ReactiveFormsModule
  // and define your form group/controls here for proper Angular form validation.

  constructor() {}

  /**
   * Placeholder function for form submission.
   * In a real application, this would handle form data validation and API submission.
   */
  submitForm(): void {
    // 1. **(TODO)** Implement Angular form validation and data retrieval here.
    console.log('Form submission attempted.');

    // 2. **(TODO)** Call your backend service to send the email.
    // e.g., this.contactService.sendEmail(formData).subscribe(...)

    // For demonstration, we'll just alert the user.
    alert("Thank you for your message! I'll get back to you shortly.");

    // 3. **(TODO)** Reset the form fields after successful submission.
  }
}

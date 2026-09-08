import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const nonBlank: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const raw = String(control.value ?? '');
  return raw.trim().length ? null : { blank: true };
};

const emailShape = (): ValidatorFn => {
  const rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (control) => {
    const raw = String(control.value ?? '');
    if (!raw) return null;
    return rx.test(raw) ? null : { invalidEmail: true };
  };
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly inquiryForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, nonBlank]],
    emailAddress: ['', [Validators.required, emailShape()]],
    body: ['', [Validators.required, nonBlank, Validators.minLength(10)]],
  });

  protected readonly sent = signal(false);

  get fullName() { return this.inquiryForm.controls.fullName; }
  get emailAddress() { return this.inquiryForm.controls.emailAddress; }
  get body() { return this.inquiryForm.controls.body; }

  handleSubmit(): void {
    if (!this.inquiryForm.valid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }
    console.log('Inquiry submitted:', this.inquiryForm.getRawValue());
    this.sent.set(true);
    this.inquiryForm.reset();
  }

  resetForm(): void {
    this.sent.set(false);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class UserFormComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.userForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        degree: [''],
        Email: [
          '',
          [
            Validators.required,
            Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/),
          ],
        ],

        dob: ['', Validators.required],

        phoneNumbers: this.formBuilder.array([
          this.formBuilder.control('', [
            Validators.required,
            Validators.pattern(/^\d{10}$/),
          ]),
        ]),
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmpassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Custom validator for password match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmpassword = form.get('confirmpassword')?.value;
    return password === confirmpassword ? null : { passwordMismatch: true };
  }

  get phoneNumbers() {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ])
    );
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log('Navigating to /next-form');
      this.router.navigate(['/next-form']).then((success) => {
        if (success) {
          console.log('Navigation successful');
        } else {
          console.error('Navigation failed');
        }
      });
    } else {
      console.error('Form is invalid:', this.userForm.errors);
    }
  }
}



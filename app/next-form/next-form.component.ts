import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-next-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './next-form.component.html',
  styleUrl: './next-form.component.scss',
})
export class NextFormComponent {
  nextForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.nextForm = this.formBuilder.group({
      tenthMark: ['', [Validators.required, Validators.maxLength(2)]],
      twelfthMark: ['', Validators.required],
    });
  }
  submitnextForm() {
    if (this.nextForm.valid) {
      console.log('Navigating to /user-form');
      this.router.navigate(['/user-form']).then((success) => {
        if (success) {
          console.log('Navigation successful');
        } else {
          console.error('Navigation failed');
        }
      });
    } else {
      console.error('Form is invalid:', this.nextForm.errors);
    }
  }
  previous() {
    window.location.reload();
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserConfig } from '../../../assets/config/userConfig';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  companyProfileForm!: FormGroup;
  isCollapsed: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.companyProfileForm = this.fb.group({
      companyName: ['SagarAdda', Validators.required],
      ownerName: ['Shivappa', Validators.required],
      branchName: ['', Validators.required],
      gstId: [
        '',
        [Validators.required, Validators.pattern('^[0-9A-Za-z]{15}$')],
      ], // Example pattern for GST
      vendorName: ['', Validators.required],
      profileImage: [null],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      emailVerified: [false],
    });

    // Sync passwords
    this.companyProfileForm.get('newPassword')?.valueChanges.subscribe(() => {
      const newPassword = this.companyProfileForm.get('newPassword')?.value;
      const confirmPassword =
        this.companyProfileForm.get('confirmPassword')?.value;
      if (newPassword !== confirmPassword) {
        this.companyProfileForm
          .get('confirmPassword')
          ?.setErrors({ mismatch: true });
      } else {
        this.companyProfileForm.get('confirmPassword')?.setErrors(null);
      }
    });
    this.companyProfileForm.setValue(UserConfig);
  }

  onSubmit() {
    if (this.companyProfileForm.valid) {
      // Call a service to submit the form data
      console.log(this.companyProfileForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.companyProfileForm.patchValue({
        profileImage: file,
      });
    }
  }

  onEmailVerification() {
    if (this.companyProfileForm.get('email')?.valid) {
      const email = this.companyProfileForm.get('email')?.value;
      // Trigger email verification logic (this would be done via a service in a real app)
      console.log(`Verification email sent to ${email}`);
      // Simulate email verification success
      setTimeout(() => {
        this.companyProfileForm.patchValue({
          emailVerified: true,
        });
      }, 2000);
    }
  }
  isEmailVerified() {
    return this.companyProfileForm.get('emailVerified')?.value;
  }
}
